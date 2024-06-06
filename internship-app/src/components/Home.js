import React from 'react';
import './Tictactoe.css';
const Home = ({ selectMode }) => {
  return (
    <div className="home">
      <h1>Tic Tac Toe Game</h1>
      <button onClick={() => selectMode('2player')}>2 Player</button>
      <button onClick={() => selectMode('1vsAI')}>1 vs AI</button>
    </div>
  );
};

export default Home;
