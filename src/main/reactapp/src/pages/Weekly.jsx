import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Weekly.css";

export default function Weekly() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTnum, setSelectedTnum] = useState("");
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  useEffect(() => {
    if (selectedTnum) fetchWeeklyLectures(selectedTnum);
  }, [selectedTnum]);

  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/teachers");
      setTeachers(res.data);
    } catch (err) {
      console.error("강사 목록 불러오기 실패", err);
    }
  };

  const fetchWeeklyLectures = async (tnum) => {
    try {
      const res = await axios.get("http://localhost:8080/api/lectures/teacherweek", {
        params: { tnum },
      });
      setWeeklyData(res.data);
    } catch (err) {
      console.error("주간 강의 불러오기 실패", err);
    }
  };

  const getWeekDates = () => {
    const today = new Date();
    const day = today.getDay(); // 0 (일) ~ 6 (토)
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - day);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(sunday);
      d.setDate(d.getDate() + i);
      return {
        date: d.toISOString().split("T")[0],
        label: `${["일", "월", "화", "수", "목", "금", "토"][i]} (${d.getMonth() + 1}/${d.getDate()})`,
      };
    });
  };

  const groupedByDate = getWeekDates().map(({ date, label }) => {
    const lectures = weeklyData.filter((lec) => lec.hdate === date);
    return { date, label, lectures };
  });

  // 이름 기준 색상 고정 (선택적)
  const getBadgeColor = (name) => {
    const colors = ["#d0ebff", "#d3f9d8", "#fff3bf", "#ffd6d6", "#e5dbff"];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="weekly-container">
      <h2>📘 강사 주간 시간표</h2>

      <div className="teacher-select">
        <select value={selectedTnum} onChange={(e) => setSelectedTnum(e.target.value)}>
          <option value="">강사를 선택하세요</option>
          {teachers.map((t) => (
            <option key={t.tnum} value={t.tnum}>
              {t.tname}
            </option>
          ))}
        </select>
      </div>

      {selectedTnum && (
        <table className="weekly-grid">
          <thead>
            <tr>
              {groupedByDate.map((day) => (
                <th key={day.date}>{day.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {groupedByDate.map((day) => (
                <td key={day.date}>
                  {day.lectures.length > 0 ? (
                    day.lectures.map((lec, idx) => (
                      <div
                        key={idx}
                        className="lecture-badge"
                        style={{ backgroundColor: getBadgeColor(lec.stname) }}
                      >
                        {lec.stname} : {lec.stime}
                      </div>
                    ))
                  ) : (
                    <div className="empty-slot">-</div>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
