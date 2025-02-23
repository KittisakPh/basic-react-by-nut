import React from "react";
import StudentItem from "./StudentItem.jsx";

function StudentList(props) {
  const s0 = props.sList[0];
  const s1 = props.sList[1];
  const s2 = props.sList[2];
  const s3 = props.sList[3];

  return (
    <div>
      <StudentItem name={s0.name} surname={s0.surname} age={s0.age} />
      <StudentItem name={s1.name} surname={s1.surname} age={s1.age} />
      <StudentItem name={s2.name} surname={s2.surname} age={s2.age} />
      <StudentItem name={s3.name} surname={s3.surname} age={s3.age} />
    </div>
  );
}

export default StudentList;
