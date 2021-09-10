import { useState } from "react";
import StudentCard from "../StudentsCard";
const StudentsContainer = ({ students }) => {
  const [usedHouses, setUsedHouses] = useState([]);

  const getStudent = (students) => {
    const filteredStudents = students.filter((student) => {
      return !usedHouses.includes(student.house);
    });
    const maxIndex = filteredStudents.length;
    const randomIndex = Math.floor(Math.random() * maxIndex);
    const choosedStudent = students[randomIndex];
    setUsedHouses([...usedHouses, choosedStudent.house]);
    return choosedStudent;
  };
  return (
    <ul>
      <li>
        <StudentCard student={getStudent()} />
      </li>
      <li>
        <StudentCard student={getStudent()} />
      </li>
      <li>
        <StudentCard student={getStudent()} />
      </li>
    </ul>
  );
};
export default StudentsContainer;
