import React from 'react';

function Connexion() {
    return (
        <div id="conn">
            <h1>CONNEXION</h1>
            <div id='email'></div>
                <p>ADRESSE EMAIL</p>
                <input id='inputemail' placeholder='ex :react@cest.poubelle' size={50}></input>
            <div id='mdp'></div>
                <p>MOT DE PASSE</p>
                <input id='inputmdp' placeholder='............' size={50}></input>
            <div id='btn'></div>
                <button>SE CONNECTER</button>
        </div>
    )
}

export default Connexion;