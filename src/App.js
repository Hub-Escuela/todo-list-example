import React, { useState } from "react";
import { NewToDo } from "./components/NewToDo";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("Hola");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (event) => {
    setToDo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToDoList([...toDoList, toDo]);
  };

  return <NewToDo handleChange={handleChange} handleSubmit={handleSubmit} />;
}

export default App;
