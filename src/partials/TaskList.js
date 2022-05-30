import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../task styles/TaskList.css';

function TaskList(){

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const tasksRenewed = [task, ...tasks];
            setTasks(tasksRenewed);
        }
    };

    const deleteTask = id => {
        const tasksRenewed = tasks.filter(task => task.id !== id);
        setTasks(tasksRenewed);
    };

    const completeTask = id => {
        const tasksRenewed = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(tasksRenewed);
    };

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='task-list-container'>
                {
                  tasks.map((task) =>
                    <Task 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        completeTask={completeTask}
                        deleteTask={deleteTask} />
                  )  
                }
             </div>
        </>
    );
}

export default TaskList;
