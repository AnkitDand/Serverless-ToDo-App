import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getAllTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const todosData = await getAllTodos();
      setTodos(todosData);
      setError(null);
    } catch (err) {
      setError("Failed to fetch todos. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (newTodo) => {
    try {
      setLoading(true);
      const addedTodo = await createTodo(newTodo);
      setTodos([...todos, addedTodo]);
    } catch (err) {
      setError("Failed to add todo. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      const updatedTodo = await updateTodo(id, {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      });

      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (err) {
      setError("Failed to update todo. Please try again.");
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Serverless Todo App</h1>
      </header>
      <main className="app-main">
        <TodoForm onAddTodo={handleAddTodo} />

        {error && <div className="error-message">{error}</div>}

        {loading && todos.length === 0 ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDeleteTodo={handleDeleteTodo}
          />
        )}
      </main>
    </div>
  );
}

export default App;
