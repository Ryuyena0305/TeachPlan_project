import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import "../css/header.css";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <header className="custom-header">
      <div className="header-left">
        
        <span className="logo-text">Teach Plan📖</span>
      </div>

      <nav className="header-menu">
        <button className="menu-button">시간표조회</button>
        <button className="menu-button">학생조회</button>
        <button className="menu-button">강의추가</button>
      </nav>

      <div className="header-right">
        <div className="profile" onClick={toggleDropdown}>
          <CgProfile size={32} className="profile-icon" />
          {isDropdownOpen && (
            <div className="dropdown-menu" onMouseLeave={closeDropdown}>
              <button className="dropdown-item">정보 조회</button>
              <button className="dropdown-item">로그아웃</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
