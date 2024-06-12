import React from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='header'>
      <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/images/intern_logo.png`} alt='logo' />
      </div>
      {innerWidth >= 635 && (
        <nav>
          <NavLink to="/" title="Task1: Responsive Landing Page" className="nav-link">Home</NavLink>
          <NavLink to="/Page2" title="Task2: Stopwatch Page" className="nav-link">Stopwatch</NavLink>
          <NavLink to="/Page3" title="Task3: Tic-Tac-Toe Page" className="nav-link">Game</NavLink>
          <NavLink to="/Page4" title="Task4: Personal Portfolio Page" className="nav-link">Portfolio</NavLink>
          <NavLink to="/Page5" title="Task5: Weather Page" className="nav-link">Weather</NavLink>
        </nav>
      )}
      {innerWidth < 635 && (
        <div className='menu-cont'>
          {menuOpen ? (
            <IoClose className="menu" onClick={toggleMenu} />
          ) : (
            <IoMenu className="menu" onClick={toggleMenu} />
          )}
        </div>
      )}
      {menuOpen && innerWidth < 635 && (
        <nav className="mobile-nav">
          <NavLink to="/" title="Task1: Responsive Landing Page" className="nav-link">Home</NavLink>
          <NavLink to="/Page2" title="Task2: Stopwatch Page" className="nav-link">Stopwatch</NavLink>
          <NavLink to="/Page3" title="Task3: Tic-Tac-Toe Page" className="nav-link">Game</NavLink>
          <NavLink to="/Page4" title="Task4: Personal Portfolio Page" className="nav-link">Portfolio</NavLink>
          <NavLink to="/Page5" title="Task5: Weather Page" className="nav-link">Weather</NavLink>
        </nav>
      )}
    </div>
  );
}

export default Header;
