const StudentsCard = ({ student }) => {
  return (
    <>
      <h3>{student.name}</h3>
      <img alt={student.name} src={student.image} />
      <p>House: {student.house} </p>
    </>
  );
};
export default StudentsCard;
