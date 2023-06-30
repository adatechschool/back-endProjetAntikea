import React from 'react';
import logo from './logo.jpg';
import user from './user.png';
import basket from'./basket-shopping-simple.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="group-parent">
        <img className="icon-user" alt="" src={user} />
        <img className="icon-basket" alt="" src={basket} />
        <div className="un-meuble-a-vendre-parent">
          <b className="un-meuble-a">UN MEUBLE A VENDRE ?</b>
          <b className="acceuil">ACCEUIL</b>
          <b className="nous-contacter">NOUS CONTACTER</b>
        </div>
      </div>
      <img className="logo" alt="" src={logo} />
    </header>
  );
}

export default Header;