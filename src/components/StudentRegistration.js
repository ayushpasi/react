import { useState } from "react";
const StudentRegistration = () => {
  const [studentName, setStudentName] = useState("");
  const [Age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [concent, setConcent] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(studentName);
    console.log(Age);
    console.log(course);
    console.log(concent);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input
          type="text"
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          value={Age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label>course:</label>
        <select
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        >
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="computer">Compter</option>
        </select>
        <label>concent:</label>
        <input
          type="checkbox"
          checked={concent}
          onChange={(e) => {
            setConcent(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
