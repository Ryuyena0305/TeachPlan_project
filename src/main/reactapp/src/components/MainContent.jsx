// MainContent.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// import Dashboard from "../pages/Dashboard.jsx";
// import ToDoList from "../pages/ToDoList.jsx";
// import Students from "../pages/Students.jsx";
// import Progress from "../pages/Progress.jsx";
// import ByTeacher from "../pages/ByTeacher.jsx";
// import Extra from "../pages/Extra.jsx";
import Homework from "../pages/homework.jsx";
import Teacher from "../pages/Teacher";
import Teacherview from "../pages/Teacherview";
import Student from "../pages/Student";
import Studentview from "../pages/Studentview"
import HomeworkDetail from "../pages/homeworkdetail.jsx";
import Weekly from "../pages/Weekly.jsx";

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
     <Route path="/homeworkdetail/:stnum" element={<HomeworkDetail />} />
      <Route path="/homework" element={<Homework/>}/>
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/teacherview" element={<Teacherview />} />
      <Route path="/student" element={<Student />} />
      <Route path="/studentview" element={<Studentview />} />
      <Route path="/weekly" element={<Weekly />} />


      {/* 기본 페이지 */}
      {/* <Route path="*" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default MainContent;
