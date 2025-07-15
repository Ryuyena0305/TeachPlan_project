import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Weekly.css";

export default function Weekly() {
  const { tnum, week } = useParams(); // URL 파라미터 받아오기
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    fetchWeeklyProgress();
  }, [tnum, week]); // 의존성에 추가

  const fetchWeeklyProgress = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/lectures/teacherweek`, {
        params: {
          tnum: tnum,
          week: week,
        },
      });
      setWeeklyData(res.data);
    } catch (err) {
      console.error("주간 진도 불러오기 실패", err);
    }
  };

  const getDayOfWeek = (dateStr) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const day = new Date(dateStr).getDay();
    return days[day];
  };

  return (
    <div className="weekly-container">
      <h2>📅 {tnum}번 강사 - {week}주차 강의 현황</h2>

      <table className="weekly-table">
        <thead>
          <tr>
            <th>요일</th>
            <th>날짜</th>
            <th>학생명</th>
            <th>진도</th>
            <th>교재/페이지</th>
          </tr>
        </thead>
        <tbody>
          {weeklyData.map((item) => (
            <tr key={item.lognum}>
              <td>{getDayOfWeek(item.hdate)}</td>
              <td>{item.hdate}</td>
              <td>{item.stname}</td>
              <td>{item.progress}</td>
              <td>{item.textbook} p.{item.page}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
