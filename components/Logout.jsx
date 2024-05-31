"use client";

import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { clearUser } from "../slices/authSlice";
import { auth } from "../firebaseConfig";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearUser());
  };

  return (
    <button onClick={handleLogout} className="mt-8 p-2 bg-red-500 text-white border rounded-md">
      Logout
    </button>
  );
};

export default Logout;
