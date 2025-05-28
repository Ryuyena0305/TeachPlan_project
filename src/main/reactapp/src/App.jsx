// App.jsx
import React from "react";
import Sidebar from "./components/SideBar.jsx";
import Header from "./components/Header.jsx";
import Maincontent from "./components/MainContent.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", marginTop: "64px" }}>
        <Sidebar />
        <main style={{ marginLeft: "240px", padding: "24px", flex: 1 }}>
          <Maincontent />
        </main>
      </div>
    </div>
  );
};

export default App;
