import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/house-rules">House Rules</Link>
    <Link to="/bar-menu">Bar Menu</Link>
    <Link to="/faq">FAQ</Link>
    <Link to="/giveaway">Giveaway</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
