import React from 'react';

// import Header from '../components/Header'
//import Title from '../components/Title';
// import Main from '../components/Main'
import { useState } from 'react';
import GameWithAI from '../components/GameWithAI'
import TwoPlayerGame from '../components/TwoPlayerGame'
import Home from '../components/Home';
import Footer from '../components/Footer';


function Page3() {
  const [mode, setMode] = useState(null);

  const selectMode = (selectedMode) => {
    setMode(selectedMode);
  };
  return (
    <div className="App">
     {/* <Header/> */}
    
     {/* <Main /> */}
     {!mode && <Home selectMode={selectMode} />}
      {mode === '2player' && <TwoPlayerGame goBack={() => setMode(null)} />}
      {mode === '1vsAI' && <GameWithAI goBack={() => setMode(null)} />}
     <Footer/>
    </div>
  );
}

export default Page3;