import "./style.css";
const StudentsCard = ({ student }) => {
  return (
    <>
      <h3 className="studentName">{student.name}</h3>
      <img className="studentImage" alt={student.name} src={student.image} />
      <p className="studentHouse">House: {student.house} </p>
    </>
  );
};
export default StudentsCard;
