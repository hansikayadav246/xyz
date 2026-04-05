import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StudentPage from "./pages/StudentPage";
import HallPage from "./pages/HallPage";
import AllocationPage from "./pages/AllocationPage";

function App() {
  return (
    <Router>
      <div>

        <h1>📚 Smart Exam Hall Allocation System</h1>

        <nav>
          <Link to="/">Students</Link> | 
          <Link to="/halls"> Halls</Link> | 
          <Link to="/allocate"> Allocate</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<StudentPage />} />
          <Route path="/halls" element={<HallPage />} />
          <Route path="/allocate" element={<AllocationPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;