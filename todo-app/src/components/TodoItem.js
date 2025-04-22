import React from "react";

function TodoItem({ todo, onToggleComplete, onDeleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="todo-checkbox"
        />

        <div className="todo-text">
          <h3 className="todo-title">{todo.title}</h3>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
        </div>
      </div>

      <button className="delete-btn" onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
