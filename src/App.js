// import logo from './logo.svg';
// import './App.css';
import Header from "./componenets/Header";
import Button from "./componenets/Button";
import Tasks from "./componenets/Tasks";
import AddTask from "./componenets/AddTask";
import { useState, useEffect } from 'react'

function App() {
  const name = "Preetham!";

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const getTasks = async() =>{
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    
    getTasks()
  }, [])

  //Fetch tasks  
  const  fetchTasks = async()=>{
    const res = await fetch("http://localhost:3001/tasks");
    const data = await res.json();
    
    //console.log(data);
    return data;
  }

    //Fetch a single task from server
    const  fetchTask = async(id)=>{
      const res = await fetch(`http://localhost:3001/tasks/${id}`);
      const data = await res.json();
      
      //console.log(data);
      return data;
    }

  const [showAddTask, setShowAddTask] = useState(false);

    //Add Task
    const addTask = async(task)=>{

      const res = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json' 
        },
        body: JSON.stringify(task)
      })
    const data = await res.json();
    setTasks([...tasks, data]);

      // console.log("Adding a task", task)
      // const id =Math.floor(Math.random() * 10000) +1;
      // const newTask = {id, ...task};
      // setTasks([...tasks, newTask]);
      // console.log(id);
    }

    //deleteTask
    const deleteTask = async(id) =>{
      // console.log("delete ",id);
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE'
      })
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder

     const toggleReminder = async(id) =>{

      const taskToToggle = await fetchTask(id);
      const updatedTask  = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'content-type' : 'application/json' 
        },
        body: JSON.stringify(updatedTask)
      })
      const data = await res.json()

      // console.log(id);
      setTasks(tasks.map((task)=> task.id === id ? {...task ,reminder: data.reminder}: task))
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
