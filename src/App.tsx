import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <Todos></Todos>
    </div>
  );
}

export default App;
