import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul className='header'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
      <li><Link to="/produtos">Produtos</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
  );
}

export default Header;
