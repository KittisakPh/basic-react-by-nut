import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import ToDoList from "./components/ToDoList/ToDoList.jsx";

function App() {
  const toDoList = [
    {
      id: 1,
      task: "Read a book",
      dueDate: new Date("2023-02-28"),
      isFinished: false,
    },
    {
      id: 2,
      task: "Buy dog food",
      dueDate: new Date("2024-06-14"),
      isFinished: true,
    },
    {
      id: 3,
      task: "Go to cinema",
      dueDate: new Date("2023-05-20"),
      isFinished: true,
    },{
      id: 4,
      task: "Print homework",
      dueDate: new Date("2024-07-26"),
      isFinished: false,
    }
  ];

  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList}/>
    </div>
  )
}

export default App;
