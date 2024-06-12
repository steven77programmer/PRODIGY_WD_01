import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const ScrollProgress = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    const pos = window.pageYOffset;
    const calcHeight = document.documentElement.scrollHeight - window.innerHeight;    const scrollValue = Math.round((pos * 100) / calcHeight);
    //console.log(calcHeight)
    setScrollValue(scrollValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="progress"
      className="scroll-progress"
      onClick={scrollToTop}
      style={ {
        display: scrollValue > 10 ? 'grid' : 'none',
        background: `conic-gradient(#FFD700 ${scrollValue}%, #003366 ${scrollValue}%)`,
      }}
    >
      <div
        id="progress-value"
        className="progress-value"
       
      >
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
      </div>
    </div>
  );
};

export default ScrollProgress;
