import React, { useState } from "react";
import "./Assets/CSS/AddTask.css";

const AddTask = ({addTask}) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTask(value);
    setValue("");
  };
  return (
    <>
      <div className="todo_add">
        <input
          type="text"
          placeholder="Add Your Task"
          value={value}

          className="todo-input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <i  onClick={addItem} class="fa-solid fa-plus">  </i>
     
      </div>
    </>
  );
};

export default AddTask;
