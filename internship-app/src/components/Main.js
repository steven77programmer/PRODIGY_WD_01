// src/Main.js
import React from 'react';
import Task from './Task';

const Main = () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Building a Responsive Landing Page. Implementing Navigation menu  and giving hover effects.', link: '#task1' },
    { id: 2, title: 'Task 2', description: 'Building a Stopwatch wep application. Implementing Starting, pausing and resetting the stopwatch, as well as tracking lap times.', link: '#task2' },
    // { id: 2, title: 'Task 2', description: 'Building a Stopwatch wep application. Implementing Starting, pausing and resetting the stopwatch, as well as tracking lap times, user can accurately measure and record time intervals.', link: '#task2' },
    { id: 3, title: 'Task 3', description: 'Building a Tic-Tac-Toe web game app. Implementing fucntions to handleclicks, track game state, and check for winning conditions.', link: '#task3' },
    { id: 4, title: 'Task 4', description: 'Building a Personal Portfolio web application. It showcases skills, projects, and accomplishments as a web developer. ', link: '#task4' },
    { id: 5, title: 'Task 5', description: 'Building a Weather application. Displaying weather conditions, temperature form users location', link: '#task5' },
  ];

  return (
    <main className="main">
      <h2>Tasks</h2>
      <div className="tasks">
        {tasks.map(task => (
          <Task key={task.id} title={task.title} description={task.description} link={task.link} />
        ))}
      </div>
    </main>
  );
}

export default Main;
