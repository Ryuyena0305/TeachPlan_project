import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Homework.css";

export default function Home() {
  const [progressData, setProgressData] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeachers();
    fetchProgress(); // 변경
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/teachers");
      setTeachers(res.data);
    } catch (error) {
      console.error("교사 조회 오류", error);
    }
  };

  const fetchProgress = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/progress/student");
      setProgressData(res.data);
    } catch (error) {
      console.error("진도 조회 오류", error);
    }
  };

  const handleTeacherChange = async (e) => {
    const tnum = e.target.value;
    setSelectedTeacher(tnum);

    if (tnum) {
      try {
        const res = await axios.get(`http://localhost:8080/api/progress/student?tnum=${tnum}`);
        setProgressData(res.data);
      } catch (error) {
        console.error("교사별 진도 조회 오류", error);
      }
    } else {
      fetchProgress();
    }
  };

  return (
    <div id="container">
      <h1>학생 진도 및 숙제 현황</h1>
      <div className="listContent">
        <div className="filter-bar">
          <label>담당 교사 :</label>
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
            {progressData.map((s) => (
              <tr key={s.stnum}>
                <td>{s.stname}</td>
                <td>{s.stschool}</td>
                <td>{s.stgrade}학년</td>
                <td>{s.progress || "진도 없음"}</td>
                <td>
                  <button onClick={() => navigate(`/homeworkdetail/${s.stnum}`)}>
                    진도 상세보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
