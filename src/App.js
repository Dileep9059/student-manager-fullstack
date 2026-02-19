import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [branch, setBranch] = useState("");

  // 🔹 Load students from Spring Boot
  const loadStudents = () => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  // 🔹 Add Student
  const addStudent = () => {
    if(name === "" || percentage === "" || branch === ""){
      alert("Please fill all fields");
      return;
    }

    axios.post("http://localhost:8080/student/add", {
      name: name,
      percentage: percentage,
      branch: branch
    }).then(() => {
      loadStudents();
      setName("");
      setPercentage("");
      setBranch("");
    });
  };

  // 🔹 Delete Student
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8080/student/delete/${id}`)
      .then(() => loadStudents());
  };

  return (
    <div className="container">
      <h1>🎓 Student Manager</h1>

      <h3>Add Student</h3>
      <input 
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input 
        placeholder="Percentage"
        value={percentage}
        onChange={e => setPercentage(e.target.value)}
      />

      <input 
        placeholder="Branch"
        value={branch}
        onChange={e => setBranch(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h3>Students List</h3>

      {students.map(s => (
        <div className="student-card" key={s.rollNo}>
          <span>
            <b>{s.rollNo}</b> | {s.name} | {s.percentage}% | {s.branch}
          </span>

          <button 
            className="delete-btn"
            onClick={() => deleteStudent(s.rollNo)}
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default App;
