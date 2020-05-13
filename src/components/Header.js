import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/artifacts">Artifacts</NavLink></li>
      <li><NavLink to="/units">Units</NavLink></li>
      <li><NavLink to="/teachers">Towns</NavLink></li>
      <li><NavLink to="/courses">Spells</NavLink></li>
    </ul>    
  </header>
);

export default Header;