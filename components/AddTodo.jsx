"use client";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebaseConfig";
import { addTodo, setTodos } from "../slices/todoSlice";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.uid);
  const todos = useSelector((state) => state.todo.todos);

  // console.log("here on add todo", todos);
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     if (user) {
  //       const q = query(collection(db, "todos"), where("userId", "==", user));
  //       const querySnapshot = await getDocs(q);
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push({ id: doc.id, ...doc.data() });
  //       });
  //       console.log("items", items);

  //       dispatch(setTodos(items));
  //     }
  //   };

  //   fetchTodos();
  // }, [user, dispatch]);

  const handleAddTodo = async () => {
    // const fetchData = async () => {
    //   const querySnapshot = await getDocs(collection(db, "todos"));
    //   const items = [];
    //   querySnapshot.forEach((doc) => {
    //     items.push({ id: doc.id, ...doc.data() });
    //   });
    //   console.log("items", items);

    //   dispatch(setTodos(items));
    // };
    // fetchData();

    // try {
    //   const newDoc = await addDoc(collection(db, "todos"), {
    //     title,
    //     completed: false,
    //     userId: user,
    //   });

      dispatch(addTodo([...todos, {
        id: uuidv4(),
        title,
        completed: false,
        userId: user,
      }]));
      setTitle("")
    //   console.log("newDoc", newDoc);
    // } catch (err) {
    //   console.error("writeToDB failed. reason :", err);
    // }
  };

  return (
    <div className="mt-36 mb-4 flex justify-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Enter Todo"
      />
      <button
        onClick={handleAddTodo}
        className="p-2 bg-slate-400 text-white ml-2 rounded-md"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
