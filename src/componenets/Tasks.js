import React from 'react'
import Task from './Task'


// const tasks = [
//     {
//         id: 1,
//         text: "Doctor Appointment",
//         day: "Jan 30",
//         reminder: true
//     },
//     {
//         id: 2,
//         text: "Swimming Class",
//         day: "Jan 29",
//         reminder: true
//     },
//     {
//         id: 1,
//         text: "Gym ",
//         day: "Jan 28",
//         reminder: true
//     }
// ]

const Tasks = ({tasks, onDelete, onToggle}) => { 
  return (
    <>
      {tasks.map((task)=>(
        // <h3>{task.text}</h3>
        <Task key = {task.id} task = {task} 
        onDelete = {onDelete} 
        onToggle = {onToggle}/>
      ))}
    </>
  )
}

export default Tasks
