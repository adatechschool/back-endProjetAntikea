import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import user from './user.png';
import basket from'./basket-shopping-simple.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
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
    </div>
  );
}

export default Header;