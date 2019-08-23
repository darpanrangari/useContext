import React, { useState, useReducer } from "react";
export const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `Blog post #${state.length + 1}` }];
      break;
    default:
      return state;
  }
};
export const Provider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [state, dispatch] = useReducer(reducer, []);
  const addBlogPost = () => {
    setBlogs([...blogs, { title: `Blog post #${blogs.length + 1}` }]); //works without reducer
    //with useReducer
    //dispatch({ type: "ADD_BLOG_POST" });
  };
  //with reducer <BlogContext.Provider value={{ state, addBlogPost }}>
  return (
    <BlogContext.Provider value={{ blogs, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
