import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCertificate, faDatabase, faLeaf, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3Alt, faJs, faPython, faJava, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>
        <p>Web Developer | Programmer</p>
        <img src="../images/stevefimg.jpg" alt="Steven Thomas" />

        <div className="skills">
          <h2><FontAwesomeIcon icon={faLaptopCode} /> Skills</h2>
          <b>
          <ul>
            
            <li><FontAwesomeIcon icon={faReact} /> React</li>
            <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
            <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
            <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
            <li><FontAwesomeIcon icon={faPython} /> Python</li>
            <li><FontAwesomeIcon icon={faJava} /> Java</li>
            <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
            <li><FontAwesomeIcon icon={faLeaf} /> MongoDB</li>
            <li><FontAwesomeIcon icon={faGitAlt} /> Git</li>
            <li><FontAwesomeIcon icon={faGithub} /> GitHub</li>
          </ul>
          </b>
        </div>

        <div className="certifications">
          <h2><FontAwesomeIcon icon={faCertificate} /> Certifications</h2>
          <ul>
            <li>Python Programming and SQL- ExcelR</li>
            <li>Introduction to Cyber Security</li>
            <li>Machine Learning Certification - Analytics Vidhya</li>
            <li>TCS iON Career Edge - Young Professional - TCS ION Career Edge</li>
          </ul>
        </div>

        <div className="projects" id="projects">
          <h2><FontAwesomeIcon icon={faProjectDiagram} /> Projects</h2>
          <ul>
            <li>
              <h3>Student Problem Solver System</h3>
              <p> A web-based application designed to manage and resolve student issues efficiently. Built using HTML, CSS, and JavaScript for the frontend, and PHP with MySQL for the backend, it provides a seamless interface for students to submit problems and for administrators to track and solve them. The project was made using software development life cycle.</p>
              <a href="https://github.com/steven77programmer/SPSS" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
            <li>
              <h3>Tic Tac Toe</h3>
              <p>A web-based Tic-Tac-Toe Game application built using ReactJs, HTML and CSS. It has 2 players and play with AI modes.</p>
              <a href="https://github.com/yourusername/project-two" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
            <li>
              <h3>Stopwatch App</h3>
              <p>A web-based Stopwatch App built using ReactJs, HTML and CSS. It has the basic functionalities of stopwatch that is play, pause, reset and track lap times.</p>
              <a href="https://github.com/steven77programmer/PRODIGY_WD_02/tree/main/stopwatch-app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
