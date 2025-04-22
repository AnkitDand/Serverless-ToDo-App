import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onDeleteTodo }) {
  if (todos.length === 0) {
    return <div className="empty-list">No tasks yet. Add a new task above!</div>;
  }

  return (
    <div className="todo-list">
      <h2>Your Tasks</h2>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;