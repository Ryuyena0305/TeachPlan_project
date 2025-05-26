import React from "react";
import Sidebar from "./components/SideBar.jsx";
import Header from "./components/Header.jsx";
import Maincontent from "./components/MainContent.jsx";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 왼쪽 사이드바 */}
      <Sidebar />

      {/* 오른쪽 전체 영역 (Header + Content) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header /> {/* 여기서 내부 로고 위치를 pl: 240px 등으로 조정해야 함 */}
        <Maincontent />
      </div>
    </div>
  );
}

export default App;
