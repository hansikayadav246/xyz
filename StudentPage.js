import React, { useState } from "react";
import { addStudent } from "../api/studentApi";

function StudentPage() {

  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    department: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(student)
      .then(() => {
        alert("Student added successfully!");
        setStudent({ name: "", rollNumber: "", department: "" });
      })
      .catch(() => {
        alert("Error adding student");
      });
  };

  return (
    <div className="container">
      <h2>🎓 Student Management</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} />
        <input type="text" name="studentId" placeholder="Student Id" value={student.studentId} onChange={handleChange} />
        <input type="text" name="department" placeholder="Department" value={student.department} onChange={handleChange} />
        <input type="text" name="year" placeholder="year" value={student.year} onChange={handleChange} />
        <input type="text" name="section" placeholder="Section" value={student.section} onChange={handleChange} />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentPage;