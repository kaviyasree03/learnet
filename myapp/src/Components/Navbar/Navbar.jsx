import React from 'react'
import './Navbar.css'
import logo from '../Assets/icons8-education-30 - Copy.png'
import { Link } from 'react-router-dom'
import cart from '../Assets/icons8-cart-30.png'
import { useState } from 'react'
import Login from '../Pages/Login'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
const Navbar = () => {
    const [menu,setMenu]= useState("home");
    const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  return (
    
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt=""></img>
     <p>Learnet</p>
    </div>
    <ul className='nav-menu'>
      <Link style={{textDecoration:'none'}} to="/"><li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li></Link>
       <SignedIn>
       <Link style={{textDecoration:'none'}} to="/courses"> <li onClick={()=>{setMenu("courses")}}>Courses{menu==="courses"?<hr/>:<></>}</li></Link>
       
       <Link style={{textDecoration:'none'}} to="/scholarship"> <li onClick={()=>{setMenu("scholarship")}}>Scholarship{menu==="scholarship"?<hr/>:<></>}</li></Link>
       <Link style={{textDecoration:'none'}} to="/blog"> <li onClick={()=>{setMenu("blog")}}>Blog{menu==="blog"?<hr/>:<></>}</li></Link>
       </SignedIn>
       </ul>
    <div className="nav-login-cart">
        <SignedOut>
            <Link style={{textDecoration:'none'}} to='/sign-in'><button onClick={()=>{setMenu("login")}}>Login{menu==="login"?<hr/>:<></>}</button></Link>
            <Link style={{textDecoration:'none'}} to='/sign-up'><button onClick={()=>{setMenu("signup")}}>SignUp{menu==="signup"?<hr/>:<></>}</button></Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
          </SignedIn>
        
            <Link to='/Cart'>
            <img src={cart} alt=""/></Link>
            <div className="nav-cart-count">
                0
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Navbar