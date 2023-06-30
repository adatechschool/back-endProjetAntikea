import React from 'react';
import './Connection.css'

function Connexion() {
    return (
        <div id="conn">
            <h1 id='txtco'>CONNEXION</h1>
            <div id='email'></div>
                <p>ADRESSE EMAIL</p>
                <input id='inputemail' placeholder='ex :react@cest.poubelle' size={50}></input>
            <div id='mdp'></div>
                <p>MOT DE PASSE</p>
                <input id='inputmdp' placeholder='............' size={50}></input>
            <div id='btn'></div>
                <button id='btnbtn'>se connecter</button>
            <div id='createaccount'>
                <p>vous n'avez pas enncore de compte ? <a href="#">Sign-in</a></p>
            </div>
        </div>
    )
}

export default Connexion;