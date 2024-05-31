"use client";

import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="flex flex-col border border-solid border-slate-500">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoApp;
