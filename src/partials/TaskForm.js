import React, { useState } from 'react';
import '../task styles/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

    const [input, setInput] = useState('');
    
    
    const manageChange = e => {
        setInput(e.target.value);
    };
    
    
    const manageAdd = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };

        props.onSubmit(newTask);
    };    

    return (
        <form className='task-form' onSubmit={manageAdd}>
            <input className='task-input' type='text' placeholder='Enter a Task' name='text' onChange={manageChange} />
            <button className='task-button'>Add Task</button>

        </form>
    );
}

export default TaskForm;
