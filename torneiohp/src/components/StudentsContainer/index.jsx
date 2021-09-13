import { useState, useEffect } from "react";
import StudentCard from "../StudentsCard";
const StudentsContainer = ({ students }) => {
  const [qqr, setQqr] = useState(true);
  const [choosedStudents, setChoosedStudents] = useState([]);
  const getStudents = () => {
    let sortedStudents = [];
    let usedHouses = [];
    let filteredStudents = [];
    for (let i = 0; i < 3; i++) {
      filteredStudents = students.filter((student) => {
        return !usedHouses.includes(student.house);
      });

      const maxIndex = filteredStudents.length;

      const randomIndex = Math.floor(Math.random() * maxIndex);

      const choosedPerson = filteredStudents[randomIndex];

      sortedStudents.push(choosedPerson);
      usedHouses.push(choosedPerson.house);
    }

    setChoosedStudents(sortedStudents);
  };
  useEffect(() => {
    getStudents();
    console.log(choosedStudents);
  }, []);

  return (
    <ul>
      {choosedStudents.map((student, index) => {
        return (
          <li key={index}>
            <StudentCard student={student} />
          </li>
        );
      })}
      <button onClick={() => getStudents()}>oi</button>
    </ul>
  );
};
export default StudentsContainer;
