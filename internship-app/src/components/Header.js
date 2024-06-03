import React from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

function Header(){

  const [innerWidth,setInnerWidth]=React.useState(window.innerWidth);
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
    return(
        <div className='header'>
        <div className='logo'><img src="../images/intern_logo.png" alt='logo'/></div>
        {innerWidth >= 635 && <nav>
        <a href="../pages/page1.js" title="Task1: Responsive Landing Page">Home</a>
        <a href="../pages/page2.js" title="Task2: Stopwatch Page">Stopwatch</a>
        <a href="../pages/page3.js" title="Task3: Tic-Tac-Toe Page">Game</a>
        <a href="../pages/page4.js" title="Task4: Personal Portfolio Page">Portfolio</a>
        <a href="../pages/page5.js" title="Task5: Weather Page">Weather</a>
      </nav>}
      
       {/* { menuOpen && <nav className={(innerWidth < 635 )? "mobile-nav":""}>
        <a href="#task1" title="Task1: Responsive Landing Page">Home</a>
        <a href="#task2" title="Task2: Stopwatch Page">Stopwatch</a>
        <a href="#task3" title="Task3: Tic-Tac-Toe Page">Game</a>
        <a href="#task4" title="Task4: Personal Portfolio Page">Portfolio</a>
        <a href="#task5" title="Task5: Weather Page">Weather</a>
      </nav>

} */}
      
      {/* {innerWidth < 635 && <div className='menu-cont'><IoMenu className="menu" onClick={displaymenu}/></div>} */}
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
          <a href="../pages/page1.js" title="Task1: Responsive Landing Page" >Home</a>
          <a href="../pages/page2.js" title="Task2: Stopwatch Page" >Stopwatch</a>
          <a href="../pages/page3.js" title="Task3: Tic-Tac-Toe Page" >Game</a>
          <a href="../pages/page4.js" title="Task4: Personal Portfolio Page" >Portfolio</a>
          <a href="../pages/page5.js" title="Task5: Weather Page" >Weather</a>
        </nav>
      )}
        </div>
)
}

export default Header;