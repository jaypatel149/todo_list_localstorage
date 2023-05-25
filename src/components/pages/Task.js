import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      if (editIndex === -1) {
        setTasks([...tasks, newTask]);
      } else {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(-1);
      }
      setNewTask("");
    }
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container  mt-5">
      <h1 className="text-center">Todo List</h1>
      <div className="row mt-4 g-2">
        <div className="col-md-6 col-sm-12 offset-md-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter task"
              value={newTask}
              onChange={handleTaskChange}
            />
            <button className="btn btn-primary w-25" onClick={handleAddTask}>
              {editIndex === -1 ? "Add Task" : "Update Task"}
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-12 offset-md-3">
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                className="list-group-item border-1 d-flex justify-content-between align-items-center mb-3"
                key={index}
              >
                {task}
                <div>
                  <button
                    className="btn btn-primary me-3"
                    onClick={() => handleEditTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {tasks.length > 0 && (
            <button
              className="btn btn-danger mt-3"
              onClick={handleDeleteAllTasks}
            >
              Delete All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
