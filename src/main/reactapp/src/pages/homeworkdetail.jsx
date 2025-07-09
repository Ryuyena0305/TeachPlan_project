import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HomeworkDetail() {
  const { stnum } = useParams(); // URL의 :stnum 파라미터
  const [homeworks, setHomeworks] = useState([]);

  useEffect(() => {
    fetchHomework();
  }, []);

  const fetchHomework = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/progress/stnum/${stnum}`);
      setHomeworks(res.data);
    } catch (err) {
      console.error("숙제 불러오기 실패", err);
    }
  };

  const toggleCheckbox = async (lognum, currentDone) => {
    try {
      const target = homeworks.find(hw => hw.lognum === lognum);
      const updated = { ...target, done: !currentDone };

      await axios.put(`http://localhost:8080/api/progress`, updated);

      setHomeworks(prev =>
        prev.map(hw => hw.lognum === lognum ? { ...hw, done: !currentDone } : hw)
      );
    } catch (err) {
      console.error("숙제 상태 변경 실패", err);
    }
  };

  return (
    <div className="homework-detail-container">
      <h2>📘 진도 체크리스트</h2>
      <ul className="homework-checklist">
        {homeworks.map((hw) => (
          <li key={hw.lognum} className="homework-item">
            <label className={hw.done ? "completed" : ""}>
              <input
                type="checkbox"
                checked={hw.done}
                onChange={() => toggleCheckbox(hw.lognum, hw.done)}
              />
              <span>
                <strong>{hw.progress}</strong> - {hw.textbook} {hw.page}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
