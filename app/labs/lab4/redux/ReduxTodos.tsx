
"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodos() {
  const { todos } = useSelector(
    (state: RootState) => state.todosReducer
  );

  const [editingTodo, setEditingTodo] = useState<{
    id: string;
    title: string;
  } | null>(null);

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>

      <ReduxTodoForm
        key={editingTodo ? editingTodo.id : "new"}
        editingTodo={editingTodo}
        onCancel={() => setEditingTodo(null)}
      />

      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem
            key={todo.id}
            todo={todo}
            onEdit={setEditingTodo}
          />
        ))}
      </ul>
    </div>
  );
}
