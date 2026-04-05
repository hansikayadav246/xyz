import React from "react";
import { allocateSeats } from "../api/allocationApi";

function AllocationPage() {

  const handleAllocation = () => {
    allocateSeats()
      .then(() => {
        alert("Seats allocated successfully!");
      })
      .catch(() => {
        alert("Error allocating seats");
      });
  };

  return (
    <div className="container">
      <h2>🪑 Seat Allocation</h2>

      <button onClick={handleAllocation}>
        Allocate Seats
      </button>
    </div>
  );
}

export default AllocationPage;