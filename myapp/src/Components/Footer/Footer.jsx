import React from "react";
import './Footer.css';
import fb from '../Assets/face.png';
import it from '../Assets/insta.png';
import twit from '../Assets/twit.png';
import lik from '../Assets/lik.png';
const Footer=() => {
  return(
    <div className="footer">
<div className="sb_footer section_padding">
  <div className="sb_footer-links">
  <hr></hr>
    <div className="sb_footer-links-div">
     <h4>for education</h4>
     <a href="/student">
      <p>Student</p>
     </a>
     <a href="/smart education">
     <p>Teachers</p>
     </a>
     <a href="/education guide">
     <p>Organization</p>
     </a>
     </div>
     <div className="sb_footer-links-div">
     <h4>Resources</h4>
     <a href="/student">
      <p>Student Center</p>
     </a>
     <a href="/smart education">
     <p>Smart education</p>
     </a>
     <a href="/education guide">
     <p>student guide</p>
     </a>
     </div>
      
      <div className="sb_footer-links-div">
        <h4>Company</h4>
        <a href="/about">
      <p>About</p>
     </a>
     <a href="/career">
     <p>Career</p>
     </a>
     <a href="/contact">
     <p>Contact</p>
     </a>
      </div>
      <div className="sb_footer-links-div">
        <h4>Partners</h4>
        <a href="/servingtech">
      <p>Serving tech</p>
     </a>
     <a href="/globe edu">
     <p>Globe Edu</p>
     </a>
     
      </div>
      <div className="sb_footer-links-div">
        <h4>Coming soon on</h4>
        <div className="socialmedia">
         <p><img src={fb} alt=""/></p>
         <p><img src={it} alt=""/></p>
         <p><img src={twit} alt=""/></p>
         <p><img src={lik} alt=""/></p>
         
        </div>
      </div>
  </div>
  <hr></hr>
  <div className="sb_footer-below">
    <div className="sb_footer-copyright">
      <p>
        @{new Date().getFullYear()}codeInn.All right reserved.
      </p>
    </div>
    <div className="sb_footer-below-links">
      <a href="/terms"><div><p>Terms & Conditions</p></div></a>
      <a href="/privacy"><div><p>Privacy</p></div></a>
      <a href="/security"><div><p>Security</p></div></a>
      <a href="/cookies"><div><p>Cookies</p></div></a>
    </div>
  </div>
</div>
</div>
);
};
export default Footer;