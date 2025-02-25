import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img src="/Logo.png" alt="logo" className="logo-img" />
      </NavLink>
      <div className="nav-links">
        
        <NavLink to="movies/popular" activeClassName="active">Popular</NavLink>
        <NavLink to="movies/top_rated" activeClassName="active">Top Rated</NavLink>
        <NavLink to="movies/upcoming" activeClassName="active">Upcoming</NavLink>
      </div>
      
    </nav>
  );
};

export default Header;
