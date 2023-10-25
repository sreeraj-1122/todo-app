import React, { useState } from 'react'
import './Assets/CSS/Todo.css'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
const Todo = () => {

  const [tasks,setTask]=useState([
    {title:"HTML"},
    {title:"REACT"},
    {title:"JS"}
  ]);

  const addTask=(title)=>{

      const newTask=[...tasks,{title}]
      setTask(newTask)
  }
  
  return (
    <>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
              <AddTask addTask={addTask}/>

              
              </div>
              
            <div className='tasks'>
              
              {tasks.map((task)=>( <ListTasks task={task}/> 

            ))}
            
               </div>

        </div>

    </>
  )
}

export default Todo