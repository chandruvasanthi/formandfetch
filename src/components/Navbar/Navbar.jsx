import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className='logolink'><h1 className="logo">FormAndFetch</h1></Link>
      
      <ul className="nav-links">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/features">Features</Link></li>
       <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
