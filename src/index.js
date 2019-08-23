import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/BlogContext";
import Blogs from "./components/Blogs";

function App() {
  return (
    <Provider>
      <div className="App">
        <Blogs />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
