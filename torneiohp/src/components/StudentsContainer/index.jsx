import { useState, useEffect } from "react";
import StudentCard from "../StudentsCard";
import "./style.css";
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
    <>
      <ul className="studentsContainer">
        {choosedStudents.map((student, index) => {
          if (student.house === "Gryffindor") {
            return (
              <li className="student Gryffindor" key={index}>
                <StudentCard student={student} />
              </li>
            );
          }

          if (student.house === "Slytherin") {
            return (
              <li className="student Slytherin" key={index}>
                <StudentCard student={student} />
              </li>
            );
          }

          if (student.house === "Ravenclaw") {
            return (
              <li className="student Ravenclaw" key={index}>
                <StudentCard student={student} />
              </li>
            );
          }

          if (student.house === "Hufflepuff") {
            return (
              <li className="student Hufflepuff" key={index}>
                <StudentCard student={student} />
              </li>
            );
          }
        })}
      </ul>
      <div className="btnContainer">
        <button className="btn" onClick={() => getStudents()}>
          Gerar novos estudantes
        </button>
      </div>
    </>
  );
};
export default StudentsContainer;
