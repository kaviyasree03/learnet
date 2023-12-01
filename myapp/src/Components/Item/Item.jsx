
import React from 'react';
import Image1 from '../Assets/image1.jpg';
import Image2 from '../Assets/java.png';
import Image3 from '../Assets/c.png';
import Image4 from '../Assets/cc.png';
import Image5 from '../Assets/ml.png';
import Image6 from '../Assets/ccc.png';
import Image7 from '../Assets/bb.png';
import Image8 from '../Assets/ds.png';

import './Item.css';


const Item = () => {
  const imageList = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, ];

  
return (
    <div className="item-container">
     <h2 class="text-lg text-black font-semibold">Top Free Courses</h2>
     <hr></hr>
      <div className="item-row">
      
        {imageList.slice(0, 4).map((image, index) => (
            <div key={index} className="item-card"> 
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className="item-image"
          />
           <a href='https://www.udemy.com/'><button className="enroll-button">Enroll Now</button></a>
          
          </div>
        
        ))}
      </div>
      <hr></hr>
      <div className="item-row">
        {imageList.slice(4,8).map((image, index) => (
             <div key={index + 4} className="item-card">
          <img
            
            src={image}
            alt={`Product Image ${index + 5}`}
            className="item-image"
          />
          <a href='https://www.udemy.com/'><button className="enroll-button">Enroll Now</button></a>
          </div>
        ))}
      </div>
      <hr></hr>
       
    </div>
  );
};

export default Item;

