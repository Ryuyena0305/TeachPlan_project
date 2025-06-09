import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Teacher.css";

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    onView();
  }, []); 

  const onView = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      console.log(response);
      setStudents(response.data); 
    } catch (error) {
      console.log(error);
    }
  };
//stname:'', stphone:'',pphone:'',stschool:'',stgrade:'',tnum:'',ststate:'',stnote:''
  return (
    <div id="container">
      <h1>학생 조회</h1>
      <div className="listContent">
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
                <td>{student.tname ? "재원중" : "미등록"}</td>
                <td>
                  <button className="detail-btn">상세조회</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
