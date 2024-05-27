import React from 'react';
import './footer.css'; // Make sure to create a CSS file for styling
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <Logo/>
          <p>
            We introduce our selves as LAND Interior and Architectural Design Consultancy - one of the best interior designers in Chennai. Chennai Luxury Interior and Architectural Design Consultancy has challenged the conventional way of interior designing and given new dimensions to the art of interior designing.
          </p>
        </div>
        <div className="footer-links">
          <h4>WHAT WE DO</h4>
          <ul>
            <li>Interior Design</li>
            <li>Kitchen</li>
            <li>Ceiling</li>
            <li>Bedroom</li>
            <li>Smart Home</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <p>Email: landinteriors@gmail.com</p>
          <p>Phone: +91 98987 65656</p>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Studio</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
