// import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";

function Todolist() {
  const [input, setInput] = useState("");
  const [Tasks, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [changedObjectId, setChangedObjectId] = useState(null);
  // let flag = false;

  // let changedObjectId = null;
  // let isEditing = false;

  function trial() {
    // console.log(tre)

    if (isEditing) {
      // Tasks.map((obj) => {
      //   if (obj.id === changedObjectId) {
      //     obj.task = input;
      //   }
      //   return obj;
      // });
      setTask(
        Tasks.map((obj) =>
          obj.id === changedObjectId ? { ...obj, task: input } : obj
        )
      );

      setIsEditing(false);
      setChangedObjectId(null);
    } else {
      addTask();
    }
  }

  function addTask() {
    const Obj = { id: Date.now(), task: input };
    setTask([...Tasks, Obj]);
    setInput("");
  }

  function Delete(id) {
    setTask(Tasks.filter((obj) => obj.id !== id));
  }

  function Edit(obj) {
    setInput(obj.task);
    setChangedObjectId(obj.id);
    setIsEditing(true);
    // flag = true;
  }

  return (
    <>
      <input
        type="text"
        placeholder="ENTER TASK"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={trial}>{isEditing ? "Update Task" : "Add Task"}</button>
      <ul>
        {Tasks.map((obj) => {
          return (
            <li key={obj.id}>
              {obj.task}
              <MdDelete onClick={() => Delete(obj.id)} />
              <MdModeEditOutline onClick={() => Edit(obj)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todolist;
