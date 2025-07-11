import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Student.css";

export default function Student() {
  const [students, setStudents] = useState([]); // 학생 목록
  const [teachers, setTeachers] = useState([]); // 교사 목록
  const [selectedTeacher, setSelectedTeacher] = useState(""); // 선택된 교사
  const navigate = useNavigate();

  useEffect(() => {
    onTeacherView();
    onView();
  }, []);


  const onView = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data); // 전체 학생 
    } catch (error) {
      console.log(error);
    }
  };

  const onTeacherView = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/teachers");
      setTeachers(response.data); //셀렉박스 교사 목록
    } catch (error) {
      console.log(error);
    }
  };

  // 교사 선택 시 해당 교사에 맞는 학생 목록 불러오기
  const handleTeacherChange = async (event) => {
    const selectedTnum = event.target.value;
    setSelectedTeacher(selectedTnum);

    if (selectedTnum) {
      // 교사가 선택되었으면 해당 교사의 학생 목록을 가져옴
      try {
        const response = await axios.get(`http://localhost:8080/api/students/teach/${selectedTnum}`);
        setStudents(response.data); // 해당 교사에 속한 학생들만 
      } catch (error) {
        console.log(error);
      }
    } else {
      // 전체조회일 경우 모든 학생
      onView();
    }
  };

  return (
    <div id="container">
      <h1>학생 조회</h1>
      <div className="listContent">
        <div className="filter-bar">
          <label>담당 교사 : </label>
          <select onChange={handleTeacherChange}>
            <option value="">전체 조회</option>
            {teachers.map((teacher) => (
              <option key={teacher.tnum} value={teacher.tnum}>
                {teacher.tname}
              </option>
            ))}
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>연락처</th>
              <th>학교</th>
              <th>학년</th>
              <th>담당 강사</th>
              <th>상태</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr className="contentView" key={index}>
                <td>{student.stname}</td>
                <td>{student.stphone}</td>
                <td>{student.stschool}</td>
                <td>{student.stgrade}</td>
                <td>{student.tname}</td>
                <td>{student.ststate ? "재원중" : "휴원중"}</td>
                <td>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(`/studentview?stnum=${student.stnum}`)}
                  >
                    상세조회
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
