import React from 'react';
import logo from './logo.jpg';
import user from './user.png';
import basket from './basket-shopping-simple.png';
import {Link} from "react-router-dom"
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img className="logo" alt="" src={logo} />
      <div className="navbar">
        <div className="icons">
          <img className="icon-user" alt="user" src={user} />
          <img className="icon-basket" alt="basket" src={basket} />
        </div>
        <div className="liens">
          <b className="a-vendre">UN MEUBLE A VENDRE ?</b>
          <b className="acceuil">ACCUEIL</b>
          <b className="nous-contacter">NOUS CONTACTER</b>
        </div>
      </div>
    </header>
  );
}

export default Header;