// src/components/NotFound.js
import React, { useEffect } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Page1');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, [navigate]);

  return (
    <div className="notfound-container">
    <h1 className="notfound-title">404</h1>
    <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="notfound-link">Go back to Home</Link>
  </div>
  );
};

export default NotFound;
