import React from 'react';

import Header from '../components/Header'
import Title from '../components/Title';
// import Main from '../components/Main'
import Footer from '../components/Footer';



function Page2() {
  return (
    <div className="App">
     <Header/>
     <Title title="Stopwatch Page"/>
     {/* <Main /> */}
     <Footer/>
    </div>
  );
}

export default Page2;