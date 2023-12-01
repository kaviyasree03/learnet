
import React from 'react';
import Hero from '../Hero/Hero';

import './Blog.css';
import stu from '../Assets/stu.png';
import q2 from '../Assets/q2.png';
import q3 from '../Assets/q3.png';
import q1 from '../Assets/q1.png';


const Blog = () => {
  return (
    <div className="home">
      <Hero />
      <div className='tittle'>
        <h2 >Upgrade Yourself</h2>
        </div>
        <div className="content">
          
        <p>Gather historical stock price data. You'll need information such as opening price, closing price, high, low, and trading volume.
Additional relevant features might include economic indicators, news sentiment, and other external factors that could influence stock prices.
        </p>
        <img src={stu} alt="Student" className="motion-image" />
      </div>
      <div className="contents">
        
        <p>
Handle missing data and outliers.
Normalize or scale the data to ensure that all features are on a similar scale. This is important for the training of neural networks.
Split the data into training and testing sets. It's common to use, for example, 80% of the data for training and 20% for testing.
        </p>
        <img src={q2} alt="Student" className="motion-image"/>
      </div>
      <div className="content">
        
        <p>Create relevant features that might aid in prediction. For instance, you could calculate moving averages, technical indicators, or other statistical measures.
        </p>
        <img src={q3} alt="Student" className="motion-image" />
      </div>
      <div className="contents">
       
        <p>
Define the architecture of your LSTM model. You can use libraries like TensorFlow or PyTorch to build your neural network.
Consider the number of LSTM layers, the number of neurons in each layer, and the activation functions.
The input to the LSTM model should be a 3D array, usually with dimensions (batch_size, time_steps, features).
        </p>
        <img src={q1} alt="Student" className="motion-image" />
      </div>
    
 
  </div>
  );
};

export default Blog ;