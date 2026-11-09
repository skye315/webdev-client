"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "./todosReducer";

type Todo = {
  id: string;
  title: string;
};

export default function ReduxTodoForm({
  editingTodo,
  onCancel,
}: {
  editingTodo: Todo | null;
  onCancel: () => void;
}) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(editingTodo ? editingTodo.title : "Learn Mongo");

  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={() => {
          if (!title.trim()) return;

          if (editingTodo) {
            dispatch(updateTodo({ id: editingTodo.id, title }));
            onCancel();
          } else {
            dispatch(addTodo(title));
          }

          setTitle("Learn Mongo");
        }}
      >
        {editingTodo ? "Update" : "Add"}
      </button>
    </div>
  );
}
