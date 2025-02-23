import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";

function ToDoList(props){
  const itemList0 = props.toDoList[0]
  const itemList1 = props.toDoList[1]
  const itemList2 = props.toDoList[2]
  const itemList3 = props.toDoList[3]

  return (
    <div>
      <ToDoItem itemList={itemList0}/>
      <ToDoItem itemList={itemList1}/>
      <ToDoItem itemList={itemList2}/>
      <ToDoItem itemList={itemList3}/>
    </div>
  );
}

export default ToDoList;