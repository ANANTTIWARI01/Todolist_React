// import React from 'react'
import { useState } from 'react';

function Todolist() {

  const [input, setInput] = useState("")
  const [Tasks, setTask] =  useState([])
  let flag= false;
  flag
  
  let changedObject=null;
  let isEditing =null;
function trial(){
  // console.log(tre)
  
  if(isEditing){
    isEditing = input
    Tasks.map((obj)=>
      {
        if(obj.task ===changedObject )
          { obj.task = input

          }
          return obj
        })
        isEditing=null
        flag=false
      }
      else{
        addTask()
  }
}


  function addTask() {
    const Obj = { id: Date.now(), task: input }
    setTask([...Tasks, Obj])
    setInput("")
  }

  function Delete(id) {
     setTask( Tasks.filter(obj => obj.id !== id))
  }


  function Edit(task) {
    setInput(task)
    changedObject  = task;
    isEditing=input
    
    flag =true

  }


  return (
    <>
      <input type="text" placeholder='ENTER TASK' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={trial}>Add Task</button>
      <ul>
        {Tasks.map((obj) => {
          return <li key={obj.id}>{obj.task}

            <button onClick={()=> Delete(obj.id)}>Delete
            </button>
            <button onClick={()=> Edit(obj.task)}>Edit
            </button>
          </li>
        })}
      </ul>
    </>

  )
}

export default Todolist