"use client";

import { useDispatch } from "react-redux";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import EditTodo from "./EditTodo";
import { db } from "../firebaseConfig";
import { deleteTodo, toggleTodo } from "../slices/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  console.log("todo", todo)

  const handleDelete = async () => {
    // console.log("deleted")
    // await deleteDoc(doc(db, "todos", todo.id));
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = async () => {
    // console.log("hereeee")
    // const todoRef = doc(db, "todos", todo.id);
    // await updateDoc(todoRef, { completed: !todo.completed });
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className="flex justify-between items-center p-2 border-b">
      {editing ? (
        <EditTodo todo={todo} setEditing={setEditing} />
      ) : (
        <>
          <span
            onClick={handleToggle}
            className={`flex-1 cursor-pointer ${todo.completed ? "line-through" : ""}`}
          >
            {todo.title}
          </span>
          <button onClick={() => setEditing(true)} className="p-2 bg-white-500 text-white mr-2 rounded-md text-black border border-slate-800">Edit</button>
          <button onClick={handleDelete} className="p-2 bg-red-500 text-white rounded-md">Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
