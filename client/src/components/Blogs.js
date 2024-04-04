import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

function Blogs() {
  const [blogs, setBlogs] = useState();

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:8000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  // console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            isUser={localStorage.getItem("userId") === blog.user._id}
            id={blog._id}
            title={blog.title}
            description={blog.description}
            imgURL={blog.image}
            userName={blog.user.name}
            key={blog._id}
          />
        ))}
    </div>
  );
}

export default Blogs;
