import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myblogs" element={<UserBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
