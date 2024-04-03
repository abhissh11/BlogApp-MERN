import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function UserBlogs() {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:8000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div>
      {user &&
        user.blogs &&
        user.blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            description={blog.description}
            imgURL={blog.image}
            userName={user.name}
            key={blog._id}
          />
        ))}
    </div>
  );
}

export default UserBlogs;
