
"use client";

import { createContext, useContext, useState, createElement } from "react";
import type { ReactNode } from "react";

type Todo = {
  id: string;
  title: string;
};

type TodosContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((currentTodos) => [...currentTodos, { id: crypto.randomUUID(), title }]);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children
  );
}

export function useTodos() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useTodos must be used within TodosProvider");
  }

  return context;
}
