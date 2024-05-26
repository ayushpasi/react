import { useState } from "react";
const Task = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "read book", completed: true },
    { id: 2, name: "Go gym", completed: false },
  ]);
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {" "}
              {task.name}--{task.completed === true ? "completed" : "pending"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Task;
