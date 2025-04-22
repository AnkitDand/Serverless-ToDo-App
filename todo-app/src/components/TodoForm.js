import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTodo({
      title,
      description,
      completed: false,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <div className="form-control">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="description">Description (optional):</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows="3"
        />
      </div>

      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
