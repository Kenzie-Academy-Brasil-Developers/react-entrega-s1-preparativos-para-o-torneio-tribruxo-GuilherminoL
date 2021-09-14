import "./App.css";
import { useState, useEffect } from "react";
import StudentsContainer from "./components/StudentsContainer";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((error) => alert(error));
  }, []);
  return (
    <div class="container">
      {students.length > 0 && <StudentsContainer students={students} />}
    </div>
  );
}

export default App;
