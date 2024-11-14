
// import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";

function Todolist() {
  const [input, setInput] = useState("");
  const [Tasks, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [changedObjectId, setChangedObjectId] = useState(null);

  function trial() {

    if (isEditing) {

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
    const Obj = { id: Date.now(), task: input, isChecked: false };
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

  function toggleCheckbox(id) {
    setTask(Tasks.map((obj) =>
      obj.id === id ? { ...obj, isChecked: !obj.isChecked } : obj
    ));
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
              <input
                type="checkbox"
                checked={obj.isChecked}
                onChange={() => toggleCheckbox(obj.id)}
              />
              {obj.task}
              <MdDelete onClick={() => Delete(obj.id)}
                style={{ pointerEvents: obj.isChecked ? 'none' : 'auto', opacity: obj.isChecked ? 0.5 : 1 }} />
              <MdModeEditOutline onClick={() => Edit(obj)}
                style={{ pointerEvents: obj.isChecked ? 'none' : 'auto', opacity: obj.isChecked ? 0.5 : 1 }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todolist;
