import React from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
const Counter = () => {
    const[counterOn,setCounterOn] = useState(false);
  return (
    <div>
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div style={{width:'100%',background:'none',marginTop:'100px',marginBottom:'100px',color:'white',paddding:'50px'}}>
        <h1>
            {counterOn &&<CountUp start={0} end={1000} duration={5} delay={0}/>}
            M
            +
            </h1>
            
    </div>
    
    </ScrollTrigger>
    
    </div>
  );
};

export default Counter;