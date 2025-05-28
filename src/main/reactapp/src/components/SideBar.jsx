// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import Teacher from "../pages/Teacher";

const Sidebar = () => {
  const menuGroups = [
    {
      title: "선생님 공간👩🏻‍🏫",
      items: [
        { label: "대시보드", path: "/dashboard" },
        { label: "To do List", path: "/todo" },
      ],
    },
    {
      title: "학생 관리🧑🏻‍🎓",
      items: [
        { label: "학생 조회", path: "/students" },
        { label: "학생별 진도 및 숙제", path: "/progress" },
      ],
    },
    {
      title: "강의 관리🎤",
      items: [
        { label: "Weekly 강의 조회", path: "/weekly" },
        { label: "선생님별 강의 조회", path: "/by-teacher" },
        { label: "정규 / 보충 강의 조회", path: "/by-teacher" },
      ],
    },
    {
      title: "기타",
      items: [{ label: "강사조회", path: "/teacher" }],
    },
  ];

  return (
    <aside className="custom-sidebar">
      <div className="menu-section">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="menu-group">
            <div className="menu-title">{group.title}</div>
            <ul className="menu-list">
              {group.items.map((item, i) => (
                <li key={i} className="menu-item">
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
