
"use client";

import { useState } from "react";
import { useTodos } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() === "") return;

    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div id="wd-react-context-todo-list">
      <h2>React Context Todo List</h2>

      <div className="flex gap-2 mb-3">
        <input
          className="rounded border px-3 py-1.5"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />

        <button
          type="button"
          onClick={handleAdd}
          className="rounded bg-blue-600 px-3 py-1.5 text-white"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-2 mb-2">
            <input
              className="rounded border px-2 py-1"
              value={todo.title}
              onChange={(e) =>
                updateTodo(todo.id, e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="rounded bg-red-600 px-3 py-1 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p>No todos yet.</p>}
    </div>
  );
}
