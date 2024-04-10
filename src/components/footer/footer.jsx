import React from 'react';
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="tutor_logo.jpg"/>
          <span>Tutor connect</span>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find a Tutor</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tutor Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
