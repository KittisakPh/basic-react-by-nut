import React from "react";
import "./ToDoItem.css";
import { format } from "date-fns";

function ToDoItem(props) {
  const itemList = props.itemList
  const date = itemList.dueDate.getDate();
  const month = itemList.dueDate.getMonth()+1;
  const year = itemList.dueDate.getFullYear();

  return (
    <div className="form-control">
      <div className="cb-container">
        <input type="checkbox" checked={itemList.isFinished} readOnly />
      </div>
      <div className="tn-container">{itemList.task}</div>
      <div className="dd-container">
      {year}/{String(month).padStart(2, "0")}/{date}
      </div>
    </div>
  );
}

export default ToDoItem;
