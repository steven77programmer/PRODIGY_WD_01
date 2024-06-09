import React from 'react';

// import Header from '../components/Header'
//import Title from '../components/Title';
// import Main from '../components/Main'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../components/PHome';
import About from '../components/About';
import ScrollProgress from '../components/ScrollProgress';
import '../components/portfolio.css'



function Page4() {
  return (
    <div className="App">
     {/* <Header/> */}
     <Navbar />
      <Home />
      <About />
      <ScrollProgress />
     {/* <Main /> */}
     <Footer/>
    </div>
  );
}

export default Page4;

