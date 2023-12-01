import React from 'react';
import './Hero.css';
import bg from '../Assets/pic1.png';

const Hero = () => {
  return (
    <div className="hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${bg})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="bgs-text">
          <h2>Transforming Lives Through Education</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;