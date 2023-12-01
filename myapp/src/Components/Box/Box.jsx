import React from 'react';
import './Box.css';

const Box = ({ title, content }) => {
  return (
    <div className="box">
      <h3>{title}</h3>
      <div className="button-container">
        <a className='b1' href='https://scholarships.gov.in/'>
          <button className="enroll-button">Guideline</button>
        </a>
        <a className='b2' href='https://scholarships.gov.in/'>
          <button className="enroll-button">Enroll Now</button>
        </a>
      </div>
    
      
      </div>
  );
};

export default Box;

        
















