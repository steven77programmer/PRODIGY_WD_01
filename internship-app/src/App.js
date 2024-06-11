import React from 'react';
import Header from './components/Header'
// import HeroSection from './components/HeroSection';
// import Main from './components/Main'
// import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
     {/* <Header/>
     <HeroSection/>
     <Main />
     <Footer/> */}
    
     
     <Router>
     <Header/>
     <Routes>
      <Route exact path="/Page1" element={<Page1/>} />
      <Route path="/Page2"  element={<Page2/>} />
      <Route path="/Page3"  element={<Page3/>} />
      <Route path="/Page4"  element={<Page4/>} />
      <Route path="/Page5"  element={<Page5/>} />
      <Route path="/PRODIGY_WD_01" element={<Page1/>} />
        {/* Catch-all route for undefined routes */}
        <Route path="/404" element={<NotFound/>} />
        {/* <Redirect to="/404" /> */}
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
