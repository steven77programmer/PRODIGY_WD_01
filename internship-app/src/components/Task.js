// src/Task.js
import React from 'react';


const Task = ({ title, description, link }) => {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Learn More</a>
    </div>
  );
}

export default Task;
