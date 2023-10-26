import React, { useState } from 'react'
import './Assets/CSS/Todo.css'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
const Todo = () => {

  const [tasks,setTask]=useState([]);

  const addTask=(title)=>{

      const newTask=[...tasks,{title}]
      setTask(newTask)
  }

  const removeTask=(index)=>{
    const newTask=[...tasks]
    newTask.splice(index,1);
    setTask(newTask)
  }
  
  return (
    <>
        <div className='todo-container'>
            <div className='header'>
              <h1>TODO APP</h1>
                <div className='add-task'>
                   <AddTask addTask={addTask}/>
                </div>
            </div>   
            <div className='tasks'>
              
              {tasks.map((task,index)=>( <ListTasks task={task} removeTask={removeTask} index={index} key={index}/> 

            ))}
            
            </div>

        </div>

    </>
  )
}

export default Todo