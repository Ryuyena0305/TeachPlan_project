import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Homeworkdetail.css";

export default function HomeworkDetail() {
  const { stnum } = useParams();
  const [homeworks, setHomeworks] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchHomework();
    fetchStudent();
  }, []);

  const fetchHomework = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/progress/stnum/${stnum}`);
     
      setHomeworks(res.data.map(hw => ({ ...hw, done: Boolean(hw.done) })));
    } catch (err) {
      console.error("숙제 불러오기 실패", err);
    }
  };

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/students/${stnum}`);
      setStudent(res.data);
    } catch (err) {
      console.error("학생 정보 불러오기 실패", err);
    }
  };

  const toggleCheckbox = async (lognum, currentDone) => {
    try {
      const target = homeworks.find(hw => hw.lognum === lognum);
      const updated = {
        ...target,
        done: currentDone ? 0 : 1, 
      };

      await axios.put(`http://localhost:8080/api/progress`, updated);

    
      setHomeworks(prev =>
        prev.map(hw =>
          hw.lognum === lognum ? { ...hw, done: !currentDone } : hw
        )
      );
    } catch (err) {
      console.error("숙제 상태 변경 실패", err);
    }
  };

  return (
    <div className="homework-detail-container">
      <h2>📘 진도 체크리스트</h2>

      {student && (
        <div className="student-info">
          <h3>
            {student.stname} ({student.stschool} {student.stgrade}학년)
          </h3>
        </div>
      )}

      <table className="homework-table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>진도</th>
            <th>교재/페이지</th>
            <th>완료</th>
          </tr>
        </thead>
        <tbody>
          {homeworks.map(hw => (
            <tr key={hw.lognum} className={hw.done ? "completed-row" : ""}>
              <td>{hw.hdate }</td>
              <td>{hw.progress}</td>
              <td>{hw.textbook} {hw.page}</td>
              <td>
                <input
                  type="checkbox"
                  checked={hw.done}
                  onChange={() => toggleCheckbox(hw.lognum, hw.done)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
