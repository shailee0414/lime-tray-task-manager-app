import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskList.scss";
import { ThemeContext } from "../context/themeContext";

const TaskList = React.memo(() => {
  const { tasks, deleteTask, toggleComplete } = useContext(TaskContext);
  const [animatingTasks, setAnimatingTasks] = useState(new Set());
  const { theme } = useContext(ThemeContext);

  const handleDelete = (id) => {
    setAnimatingTasks((prev) => new Set(prev).add(id));
    setTimeout(() => {
      deleteTask(id);
      setAnimatingTasks((prev) => {
        const updated = new Set(prev);
        updated.delete(id);
        return updated;
      });
    }, 300);
  };

  return (
    <div
      className={`app ${
        theme === "dark" ? "dark-theme" : "light-theme"
      } task-list`}
    >
      <div className="task-header task-row ">
        <div>Task Description</div>
        <div>Status</div>
        <div>Created At</div>
        <div>Mark as Complete</div>
        <div>Delete</div>
      </div>

      <div className="task-body">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className={`task-row 
              ${task.completed ? "completed" : ""} 
              ${animatingTasks.has(task.id) ? "fade-out" : "fade-in"}`}
          >
            <div>{task.text}</div>
            <div>{task.completed ? "Completed" : "Pending"}</div>
            <div>{task.createdAt || "-"}</div>
            <button
              disabled={task.completed}
              className={task.completed ? "done" : "pending"}
              onClick={() => toggleComplete(task.id)}
            >
              Done
            </button>
            <button className="delete" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TaskList;
