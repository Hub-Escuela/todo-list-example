import React, { useState } from "react";
import { NewToDo } from "./components/NewToDo";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("Hola");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = () => {};
  return <NewToDo handleChange={handleChange} />;
}

export default App;
