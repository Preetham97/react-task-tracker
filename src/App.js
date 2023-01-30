// import logo from './logo.svg';
// import './App.css';
import Header from "./componenets/Header";
import Button from "./componenets/Button";
import Tasks from "./componenets/Tasks";
import AddTask from "./componenets/AddTask";
import { useState } from 'react'

function App() {
  const name = "Preetham!";

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Jan 30",
        reminder: true
    },
    {
        id: 2,
        text: "Swimming Class",
        day: "Jan 29",
        reminder: true
    },
    {
        id: 3,
        text: "Gym ",
        day: "Jan 28",
        reminder: true
    }
]);

    const [showAddTask, setShowAddTask] = useState(false);

    //Add Task
    const addTask = (task)=>{
      //console.log("Adding a task", task)
      const id =Math.floor(Math.random() * 10000) +1;
      const newTask = {id, ...task};
      setTasks([...tasks, newTask]);
      console.log(id);
    }

    //deleteTask
    const deleteTask = (id) =>{
      // console.log("delete ",id);
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder

     const toggleReminder =(id) =>{
      // console.log(id);
      setTasks(tasks.map((task)=> task.id === id ? {...task ,reminder: !task.reminder}: task))
     }
  return (

    <div className="container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>Hello {name}</h1> */}

      <Header title = "Task Tracker!" onAdd = {()=> setShowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
      {showAddTask? <AddTask onAdd = {addTask}/>: "Please Add tasks via the 'Add a Task' button."}

    {/* <Button color = 'red' text = 'Hello Button Component'/> */}
      {/* <Button /> */}
      
      {tasks.length>0 ? (
      <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
      ) : (
        "There are no Tasks to show!"
        )
        } 
    </div>
  );
}

export default App;
