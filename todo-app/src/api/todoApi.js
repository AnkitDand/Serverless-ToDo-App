const API_URL = "https://sy689xhs2d.execute-api.ap-south-1.amazonaws.com/prod";

export const getAllTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return await response.json();
};

export const createTodo = async (todoData) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return await response.json();
};

export const updateTodo = async (id, todoData) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return await response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  return await response.json();
};
