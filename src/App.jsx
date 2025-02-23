import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentList from "./components/StudentList.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const sList = [
    { name: "Tom", surname: "Cruise", age: 24 },
    { name: "Tony", surname: "Ja", age: 65 },
    { name: "Bee", surname: "Hank", age: 68 },
    { name: "An", surname: "Evan", age: 35 },
  ];
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <StudentList sList={sList}/>
    </div>
  );
  // React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { style: { color: "green" } }, "Resume"),
  //   React.createElement("h2", null, "Kittisak Phatchaiphongsa"),
  //   React.createElement(
  //     "p",
  //     null,
  //     "My Favorite color is Blue",
  //     React.createElement("br"),
  //     "Height is 180 cm",
  //     React.createElement("br"),
  //     "Weight is 70 kg",
  //     React.createElement("br"),
  //     "My Favorite quote is Love u than u know"
  //   )
  // );
}

export default App;
