import React, { useState } from "react";
export const BlogContext = React.createContext();

export const Provider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlogPost = () => {
    setBlogs([...blogs, { title: `Blog post #${blogs.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
