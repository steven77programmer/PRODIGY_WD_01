import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

import hiBoyGif from '../images/hiboy.gif'; 
//import './About.css';

const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value based on when you want the GIF to appear
  });


  return (
 <section id="about" ref={ref}>
      <div className="about-container">
      <div className="about-header">
        <h2>About Me </h2> &nbsp;
          {inView && (
          <div className="hi-boy-gif">
            <img src={hiBoyGif} alt="Boy waving hi" />
          </div>
        )}
        </div>
        
      
        <p>
          Hello! I am Steven Thomas, a passionate web developer with expertise in
          React, HTML, CSS, and JavaScript. I have completed Bachelor of Science in Information Technology.<b> I am a Web Development intern at Prodigy InfoTech.</b>
        </p>
        <p>
         I have been into coding and keen into understanding technologies and developing software.
        </p>
        
        {/* {inView && (
          <div className="hi-boy-gif">
            <img src={hiBoyGif} alt="Boy waving hi" />
          </div>
        )} */}


        <div className="hobbies">
          <h3>Hobbies</h3>
          <p>
            When I'm not coding, I enjoy:
          </p>
          <ul>
            <li>Watching tech videos</li>
            <li>Playing Badminton and Chess</li>
            <li>Investing in Stock Market Equity</li>
            <li>Watching Anime</li>
          </ul>
        </div>

        <div className="contact" id="contact">
          <h3>Contact</h3>
          <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn:</p>
          <ul>
            <li><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:steven77thomas.2003@gmail.com">steven77thomas.2003@gmail.com</a></li>
            <li><FontAwesomeIcon icon={faUser} /> LinkedIn: <a href="https://www.linkedin.com/in/steven-thomas-94947523b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/steven-thomas</a></li>
            <li><FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/steven77programmer?tab=repositories" target="_blank" rel="noopener noreferrer">github.com/steven77programmer</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
