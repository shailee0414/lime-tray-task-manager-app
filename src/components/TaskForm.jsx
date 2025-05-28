import React, { useState, useContext, useCallback } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskForm.scss";
import "./Buttons.scss";
import { ThemeContext } from "../context/themeContext";

const TaskForm = React.memo(() => {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addTask(text);
      setText("");
    },
    [text, addTask]
  );

  return (
    <form onSubmit={handleSubmit} className={`task-form ${theme}-theme`}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Task..."
        className="task-input"
      />
      <button className={`${theme}-task-button task-buttons`} type="submit">
        Add
      </button>
    </form>
  );
});

export default TaskForm;
