import React from "react";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Bookmarks from "./components/Bookmarks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
}

export default App;
