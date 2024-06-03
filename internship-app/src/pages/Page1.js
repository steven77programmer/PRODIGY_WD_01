import React from 'react';

import Header from '../components/Header'
import HeroSection from '../components/HeroSection';
import Main from '../components/Main'
import Footer from '../components/Footer';



function Page1() {
  return (
    <div className="App">
     <Header/>
     <HeroSection/>
     <Main />
     <Footer/>
    </div>
  );
}

export default Page1;