// src/components/TaskItem.js
import React, { useState } from 'react';
import './TaskItem.css'; // Import CSS specific to TaskItem

const TaskItem = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newTitle, newDescription);
    }
    setIsEditing(!isEditing);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleComplete(task.id)} 
        />
        {isEditing ? (
          <>
            <input 
              type="text" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)} 
            />
            <textarea 
              value={newDescription} 
              onChange={(e) => setNewDescription(e.target.value)} 
            />
          </>
        ) : (
          <>
            <span onClick={handleExpand}>{task.title}</span>
            {isExpanded && (
              <div className="task-details">
                <p>{task.description}</p>
                <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
              </div>
            )}
          </>
        )}
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
