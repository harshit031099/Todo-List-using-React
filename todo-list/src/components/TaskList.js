// src/components/TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        className="search-input"
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Search tasks" 
      />
      {filteredTasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete} 
          editTask={editTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
