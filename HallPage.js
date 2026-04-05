import React, { useState } from "react";
import { addHall } from "../api/hallApi";

function HallPage() {

  const [hall, setHall] = useState({
    hallName: "",
    capacity: ""
  });

  const handleChange = (e) => {
    setHall({
      ...hall,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addHall(hall)
      .then(() => {
        alert("Hall added successfully!");
        setHall({ hallName: "", capacity: "" });
      })
      .catch(() => {
        alert("Error adding hall");
      });
  };

  return (
    <div className="container">
      <h2>🏫 Hall Management</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="hallName" placeholder="Hall Name" value={hall.hallName} onChange={handleChange} />
        <input type="number" name="capacity" placeholder="Capacity" value={hall.capacity} onChange={handleChange} />

        <button type="submit">Add Hall</button>
      </form>
    </div>
  );
}

export default HallPage;