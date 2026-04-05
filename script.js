const BASE_URL = "http://localhost:8080";

// ✅ ADD STUDENT
function addStudent() {
    const student = {
        name: document.getElementById("name").value,
        studentid: document.getElementById("studentId").value,
        department: document.getElementById("department").value,
		year:document.getElementById("year").value,
		section:document.getElementById("section").value
		
    };

    fetch(BASE_URL + "/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
    .then(res => res.json())
    .then(() => {
        alert("Student added successfully!");
    })
    .catch(() => {
        alert("Error adding student");
    });
}

// ✅ ADD HALL
function addHall() {
    const hall = {
        hallName: document.getElementById("hallName").value,
        capacity: document.getElementById("totalSeats").value
    };

    fetch(BASE_URL + "/halls", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(hall)
    })
    .then(res => res.json())
    .then(() => {
        alert("Hall added successfully!");
    })
    .catch(() => {
        alert("Error adding hall");
    });
}

// ✅ ALLOCATE SEATS
function allocateSeats() {
    fetch(BASE_URL + "/allocate", {
        method: "POST"
    })
    .then(() => {
        alert("Seats allocated successfully!");
    })
    .catch(() => {
        alert("Error allocating seats");
    });
}