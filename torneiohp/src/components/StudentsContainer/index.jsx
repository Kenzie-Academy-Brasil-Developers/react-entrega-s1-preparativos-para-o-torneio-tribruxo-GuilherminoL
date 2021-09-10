import { useState } from "react";
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
  };
  return console.log();
};
export default StudentsContainer;
