import React from "react";

function Assignment2() {
  const name = "Selva";
  const age = 21;

  const student = {
    dept: "AI & DS",
    college: "Gnanamani"
  };

  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <div>
      <h2>My Info</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <p>Department: {student.dept}</p>
      <p>College: {student.college}</p>

      <p>Skills: {skills.join(", ")}</p>
    </div>
  );
}

export default Assignment2;