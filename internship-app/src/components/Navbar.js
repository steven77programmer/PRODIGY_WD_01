import React from 'react';
//cd cdimport './Navbar.css';

const Navbar = () => {
  return (
    <nav className='pnav'>
      <h1>Steven Thomas</h1><br/>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
