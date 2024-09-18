import './ToDoComponent.css'
import React, { useState } from 'react'

const ToDoComponent = () => {
const [inputValue, setInputValue] = useState('');
const [tasks, setTasks] = useState([]);

const addTask= ()=>{
    const newTask={name:inputValue, completed:false};
    setTasks([...tasks,newTask]);
    setInputValue('');
}

const deleteTask = (index)=>{
const newTask = tasks.filter((_,taskIndex)=> taskIndex !== index);
setTasks(newTask);
}

  return (
    <div className='main-container'>
        <h1>ToDo App</h1>
    <div className='input-container'>
        <input  
        type='text' 
        className='input-box'
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <button className='add-btn' onClick={addTask}>Add Task</button>
    </div>

    <div className='task-list'>
        <h3>Task List</h3>
       
        {tasks.map((task,index)=>
        <div className='list'>
        <p>{index+1}: {task.name}</p>
        <span onClick={() => deleteTask(index)} class="material-symbols-outlined">
            delete</span>
        </div>
        )}
    </div>
    </div>
  );
};

export default ToDoComponent;