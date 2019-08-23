import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Blogs = () => {
  const value = useContext(BlogContext);
  //to make is work with reducer just user this
  // const blogs = value.blogs.map(blog => (
  const blogs = value.blogs.map(blog => (
    <div key={blog.title}>
      <div>{blog.title}</div>
    </div>
  ));

  return (
    <div>
      <button onClick={value.addBlogPost}>Add Blog Post</button>

      {blogs}
    </div>
  );
};
export default Blogs;
