"use client";

import { useSelector } from "react-redux";
import Logout from "./Logout";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Auth from "./Auth";

function HomePage() {
  const user = useSelector((state) => state.auth.user.uid);

  return (
    <div>
      {user !== "" ? (
        <div className="flex flex-col w-96 m-auto">
          <AddTodo />
          <TodoList />
          <Logout />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default HomePage;
