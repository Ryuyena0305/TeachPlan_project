// MainContent.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// import Dashboard from "../pages/Dashboard.jsx";
// import ToDoList from "../pages/ToDoList.jsx";
// import Students from "../pages/Students.jsx";
// import Progress from "../pages/Progress.jsx";
// import Weekly from "../pages/Weekly.jsx";
// import ByTeacher from "../pages/ByTeacher.jsx";
// import Extra from "../pages/Extra.jsx";
import Teacher from "../pages/Teacher";
import Teacherview from "../pages/Teacherview";
import Student from "../pages/Student";
import Studentview from "../pages/Studentview"

function MainContent() {
  return (
    <Routes>
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/todo" element={<ToDoList />} />
      <Route path="/students" element={<Students />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/weekly" element={<Weekly />} />
      <Route path="/by-teacher" element={<ByTeacher />} />
      <Route path="/extra" element={<Extra />} /> */}
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/teacherview/:tid" element={<Teacherview />} />
      <Route path="/student" element={<Student />} />
      <Route path="/studentview/:stnum" element={<Studentview />} />

      {/* 기본 페이지 */}
      {/* <Route path="*" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default MainContent;
