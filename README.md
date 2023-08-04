1. Instale o react-router-dom
Primeiro, você precisará instalar o pacote react-router-dom. Você pode fazer isso abrindo um terminal no diretório do projeto e executando:
npm install react-router-dom
yarn add react-router-dom

2. Configure suas rotas
Você usará os componentes BrowserRouter, Switch e Route do react-router-dom para definir suas rotas. Aqui está um exemplo básico de como fazer isso em seu arquivo App.js (ou em outro componente principal):
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
      <li><Link to="/produtos">Produtos</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
  );
}

export default Header;


3. Atualize o App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
      <li><Link to="/produtos">Produtos</Link></li>
      <li><Link to="/contato">Contato</Link></li>
    </ul>
  );
}

export default Header;
