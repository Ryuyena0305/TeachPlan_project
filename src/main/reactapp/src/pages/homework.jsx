import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Homework.css";

export default function Home() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [homeworks, setHomeworks] = useState({});
  const [openDetail, setOpenDetail] = useState(null); // 열려 있는 상세보기 학생 번호

  useEffect(() => {
    fetchTeachers();
    fetchStudents();
  }, []);
  const navigate = useNavigate();

  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/teachers");
      setTeachers(res.data);
    } catch (error) {
      console.error("교사 조회 오류", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/students");
      setStudents(res.data);
      // 각 학생별 숙제도 병렬로 불러옴
      res.data.forEach((student) => fetchHomework(student.stnum));
    } catch (error) {
      console.error("학생 조회 오류", error);
    }
  };

  const fetchHomework = async (stnum) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/homeworks/${stnum}`);
      setHomeworks((prev) => ({ ...prev, [stnum]: res.data }));
    } catch (error) {
      console.error("숙제 조회 오류", error);
    }
  };

  const handleTeacherChange = async (e) => {
    const tnum = e.target.value;
    setSelectedTeacher(tnum);
    if (tnum) {
      try {
        const res = await axios.get(`http://localhost:8080/api/students/teach/${tnum}`);
        setStudents(res.data);
        res.data.forEach((student) => fetchHomework(student.stnum));
      } catch (error) {
        console.error("교사별 학생 조회 오류", error);
      }
    } else {
      fetchStudents();
    }
  };

  return (
    <div className="home-container">
      <h2>📚 학생 진도 및 숙제 현황</h2>

      <div className="filter-bar">
        <label>담당 교사:</label>
        <select value={selectedTeacher} onChange={handleTeacherChange}>
          <option value="">전체 조회</option>
          {teachers.map((t) => (
            <option key={t.tnum} value={t.tnum}>
              {t.tname}
            </option>
          ))}
        </select>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>학교</th>
            <th>학년</th>
            <th>최근 진도</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            const studentHomework = homeworks[s.stnum] || [];
            const latestProgress = studentHomework.length > 0 ? studentHomework[studentHomework.length - 1].progress : "진도 없음";

            return (
              <React.Fragment key={s.stnum}>
                <tr>
                  <td>{s.stname}</td>
                  <td>{s.stschool}</td>
                  <td>{s.stgrade}학년</td>
                  <td>{latestProgress}</td>
                  <td>
                    <button onClick={() => navigate(`/homeworkdetail/${s.stnum}`)}>
                    진도 상세보기
                    </button>
                  </td>
                </tr>
                {openDetail === s.stnum && (
                  <tr className="detail-row">
                    <td colSpan="6">
                      <ul className="homework-list">
                        {studentHomework.length === 0 ? (
                          <li>진도 기록이 없습니다.</li>
                        ) : (
                          studentHomework.map((hw) => (
                            <li key={hw.lognum}>
                              <input
                                type="checkbox"
                                checked={hw.done}
                                readOnly
                              />
                              {` ${hw.progress} - [${hw.textbook}] p.${hw.page}`}
                            </li>
                          ))
                        )}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
