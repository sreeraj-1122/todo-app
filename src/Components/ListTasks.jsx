import React from 'react'
import './Assets/CSS/ListTasks.css'

const ListTasks = ({task}) => {
  return (
    <>
      <div className="list-tasks">

         {task.title}
          <button className='delete-btn'>Delete</button>

      </div>
    </>
  )
}

export default ListTasks