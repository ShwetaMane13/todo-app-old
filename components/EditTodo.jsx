"use client";

import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebaseConfig";
import { editTodo } from "../slices/todoSlice";

const EditTodo = (props) => {
  const { todo, setEditing } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo.title);

  const handleChangeTodo = ({ target: { value } }) => {
    setTitle(value);
  };

  const handleEditTodo = async () => {
    // try {
      // if (title.trim()) {
        // const todoRef = doc(db, "todos", todo.id);
        // await setDoc(todoRef, { ...todo, title });
        dispatch(editTodo({ ...todo, title }));
        setEditing(false);
      // }
    // } catch (error) {
    //   console.error("Error updating todo:", error);
    // }
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTodo}
        className="p-2 border border-gray-300"
      />
      <button onClick={handleEditTodo} className="p-2 bg-green-500 text-white ml-2 rounded-md">Save</button>
    </div>
  );
};

export default EditTodo;
