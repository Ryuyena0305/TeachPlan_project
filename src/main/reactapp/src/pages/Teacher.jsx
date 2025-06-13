import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Teacher.css";

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    onView();
  }, []);

  const onView = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/teachers");
      console.log(response);
      setTeachers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="container">
      <h1>학원강사 조회</h1>
      <div className="listContent">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>연락처</th>
              <th>생년월일</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr className="contentView" key={index}>
                <td>{teacher.tname}</td>
                <td>{teacher.tphone}</td>
                <td>{teacher.tbirth}</td>
                <td>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(`/teacherview?tnum=${teacher.tnum}`)} 
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
