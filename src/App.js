import React, {useState} from "react";
import Header from "./components/Header"
import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
    //Set default tasks list state
    const [tasks, setTasks] = useState([ 
        {id: "task-1", title: "Learn JavaScript", status: false},
        {id: "task-2", title: "Code a todo list", status: false},
    ]);

    //Show incompleted tasks state
    const [showIncompleteTask, setShowIncompleteTask] = useState(false);
    
    //New tasks state
    const [newTask, setNewTask] = useState("")

    //Handle filter of incomplete task
    const handleFilter = (event) => {
        // console.log(event.target.checked);
        setShowIncompleteTask(event.target.checked);
    };

    //Handle tasks list status change
    const handleStatus = (taskId, taskStatus) => {
        //Neu status true overwrite status value of setTask
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {...task, status: task.status ? false : true }}
            return task;
        }))
    };

    //Add new task
    const addNewTask = (event) => {
        setNewTask(event.target.value);
    };

    //Handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask) {
            const task = {
                id: Date.now(),
                title: newTask,
                status: false,
            }

            setTasks([...tasks, task]);

            setNewTask("");
        }

        
    }

    //Remove task
    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="container">
            <Header />
            
            <TaskList tasks ={tasks} showIncompleteTask={showIncompleteTask} handleStatus={handleStatus} removeTask={removeTask} handleFilter={handleFilter} />

            <AddTaskForm handleSubmit={handleSubmit} addNewTask={addNewTask} newTask={newTask}  />

    </div>
    )
}

export default App;
