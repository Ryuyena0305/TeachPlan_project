// Sidebar.jsx
import React from "react";
import "../css/Sidebar.css";

const Sidebar = () => {
  const menuGroups = [
    {
      title: "선생님 공간👩🏻‍🏫",
      items: ["대시보드", "To do List"],
    },
    {
      title: "학생 관리🧑🏻‍🎓",
      items: ["학생 조회", "학생별 진도 및 숙제 "],
    },
    {
      title: "강의 관리🎤",
      items: ["Weekly 강의 조회", "선생님별 강의 조회",  "정규 / 보충 강의 조회"],
    },
    {
      title: "기타",
      items: ["강사조회"],
    },
  ];

  return (
    <aside className="custom-sidebar">
      <div className="menu-section">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="menu-group">
            <div className="menu-title">{group.title}</div>
            <ul className="menu-list">
              {group.items.map((label, i) => (
                <li key={i} className="menu-item">
                  {label}
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
