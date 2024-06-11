import React from 'react';

// import Header from '../components/Header'
//import Title from '../components/Title';
// import Main from '../components/Main'
import Footer from '../components/Footer';
import Weather from '../components/Weather';
import { WiDayCloudy } from 'react-icons/wi';



function Page5() {
  return (
    <div className="page5">
     {/* <Header/> */}
     {/* <Title title="Weather App"/> */}
     {/* <Main /> */}
     <h1>
        <div className='icons'><WiDayCloudy size={50}  /></div>Weather App</h1>
      <Weather />
     <Footer/>
    </div>
  );
}

export default Page5;