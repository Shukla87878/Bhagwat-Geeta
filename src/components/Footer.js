import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="footer-copyright text-center py-3">
        © 2024 Copyright: Made By <Link to="/about">Nitish Shukla</Link> &nbsp;&nbsp;&nbsp;<br />
        <a href="https://www.linkedin.com/in/nitish-shukla-a2ab0a207/" target='_blank' rel="noopener noreferrer" style={{ color: "blue" }}>
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://github.com/Shukla87878" target='_blank' rel="noopener noreferrer" style={{ color: "black" }}>
          <i className="fab fa-github fa-2x"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/iamnshukla/" target='_blank' rel="noopener noreferrer" style={{ color: "pink" }}>
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
       
        &nbsp;&nbsp;&nbsp;<br /><br />
        <p className="mt-5 mb-3 text-muted">
          <a href="https://www.hitwebcounter.com" rel="noopener noreferrer">
            <img 
              style={{ height: '50px', width: '200px' }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cab_Speed_300V_blink.gif/640px-Cab_Speed_300V_blink.gif"
              title="Free Counter"
              alt="web counter"
              border="0"
            />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
