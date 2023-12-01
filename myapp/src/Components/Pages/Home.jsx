
import React from 'react';
import Hero from '../Hero/Hero';

import Counter from '../../Counter/Counter';
import './Home.css';
import hp from '../Assets/hp.png';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${hp})`,
          height: '120vh',
          width:'218vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="bgs-text1">
          <h2> <Counter/></h2>
          <h2>Students Around the globe</h2>
        </div>
        <div className="bgs-text2">
          <h2> <Counter/></h2>
          <h2> Online Courses</h2>
        </div>
        </div>
     
    </div>
  );
};

export default Home;