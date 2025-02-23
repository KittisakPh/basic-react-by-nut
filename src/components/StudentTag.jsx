import React from "react";
import "./StudentTag.css"

function StudentTag(props){
  const year = new Date().getFullYear() - props.age;
  let retired = props.age > 60;
  return (
    <div className="AgeGroup">
    <div className={year % 4 === 0 ? "Tag Blue" : year % 4 === 1 ? "Tag Red" : year % 4 === 2 ? "Tag Green" : "Tag LightBlue" }>
      {year}
    </div>
    <div className={retired ? "Tag Retired" : "Tag Working"}>
      {retired ? "Retired" : "Working"}
    </div>
  </div>
  )
}

export default StudentTag