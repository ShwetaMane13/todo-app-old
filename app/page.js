"use client";

import { Provider } from "react-redux";
import { store } from "../slices/store";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
