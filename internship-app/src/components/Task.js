// src/Task.js
import React from 'react';
import {Link} from "react-router-dom";

const Task = ({ title, description, link }) => {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <a href={link}>Learn More</a> */}
      <Link to={link}>Learn More</Link>
    </div>
  );
}

export default Task;
