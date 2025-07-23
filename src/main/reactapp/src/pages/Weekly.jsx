import React, { useEffect, useState, useMemo } from "react";
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
        dayName: ["일", "월", "화", "수", "목", "금", "토"][i],
      };
    });
  };

  const weekDays = getWeekDates();

  const groupedByWeekday = weekDays.map(({ label, dayName }) => {
    const lectures = weeklyData.filter((lec) => lec.week === dayName);
    return { label, lectures };
  });

  const nameColorMap = useMemo(() => {
    const baseColors = [
      "#d0ebff", "#d3f9d8", "#fff3bf", "#ffd6d6",
      "#e5dbff", "#ffd8a8", "#e6fcf5", "#f3d9fa", "#c5f6fa", "#ffe066"
    ];

    // Fisher-Yates shuffle
    const shuffledColors = [...baseColors];
    for (let i = shuffledColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
    }

    const uniqueNames = [...new Set(weeklyData.map((lec) => lec.stname))];
    const map = {};
    uniqueNames.forEach((name, i) => {
      map[name] = shuffledColors[i % shuffledColors.length];
    });
    return map;
  }, [weeklyData]);

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
              {groupedByWeekday.map((day) => (
                <th key={day.label}>{day.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {groupedByWeekday.map((day) => (
                <td key={day.label}>
                  {day.lectures.length > 0 ? (
                    day.lectures.map((lec, idx) => (
                      <div
                        key={idx}
                        className="lecture-badge"
                        style={{ backgroundColor: nameColorMap[lec.stname] }}
                      >
                        {lec.stname} : {lec.starttime?.slice(0, 5)}
                        {!lec.lecturetype && (
                          <span className="dot" title="보충수업"></span>
                        )}
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
