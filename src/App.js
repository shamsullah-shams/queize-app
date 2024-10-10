import axios from "axios";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  const loadData = () => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => {
          setTodo(response.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Testing Axios</h1>
      {todo.map((item, index) => {
        return (
          <div className="data" key={index}>
            {item.title}
          </div>
        );
      })}

      <button onClick={loadData}>Load Data</button>
    </div>
  );
};

export default App;
