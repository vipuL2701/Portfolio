import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p> &copy; Copyright - 2024 -<Link to="https://twitter.com/vipulngm5">
      Vipul Nigam</Link> </p>
      <p>Contact Email Id : vplnigam@gmail.com</p>
      <br/>
    </footer>
  );
};

export default Footer;
