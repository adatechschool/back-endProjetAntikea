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
          <Link to="/connexion"><img className="icon-user" alt="user" src={user} /></Link>
          <Link to="/panier"><img className="icon-basket" alt="basket" src={basket} /></Link>
        </div>
        <div className="liens">
          <Link to="/vendre"><p className="a-vendre">UN MEUBLE A VENDRE ?</p></Link>
          <Link to="/"><p className="acceuil">ACCUEIL</p></Link>
          <Link to="/contact"><p className="nous-contacter">NOUS CONTACTER</p></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;