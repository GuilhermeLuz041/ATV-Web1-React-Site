import React from 'react';
import { Link } from 'react-router-dom'; 

function Menu() {
  return (
    <div>
      <ul id="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/historia">História</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
      <div id="submenu"></div>
    </div>
  );
};

export default Menu;
