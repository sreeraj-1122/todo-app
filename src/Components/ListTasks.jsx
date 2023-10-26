import React from 'react'
import './Assets/CSS/ListTasks.css'

const ListTasks = ({task,index,removeTask}) => {
  return (
    <>
      <div className="list-tasks">

         {task.title}

         <i onClick={()=>{removeTask(index)}} class="fa-regular fa-trash-can "></i>
    

      </div>
    </>
  )
}

export default ListTasks