import React, { createContext, useState, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

// ===================== Add New Task =====================
  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  // ===================== Delete task =====================
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ===================== Mark as complete =====================
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  // ===================== Filter on Tasks =====================
  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((t) => t.completed);
    if (filter === "pending") return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <TaskContext.Provider
      value={{
        tasks: [...filteredTasks],
        addTask,
        deleteTask,
        toggleComplete,
        setFilter
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
