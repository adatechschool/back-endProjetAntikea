import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="column" id="norm">
                <h1>ANTIKEA</h1>
                <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit<br/>
                3 bd Stalingrad, 44000<br />Nantes</p>
                <a href="#">contact@antikea.fr</a>
            </div>
            <div className="column" id="shopping">
                <h1 id="textFooter">SHOPPING</h1>
                <ul>
                    <li id="lien"><a href="#">Votre panier</a></li>
                    <li id="lien"><a href="#">Vos commandes</a></li>
                    <li id="lien"><a href="#">Vos favoris</a></li>
                    <li id="lien"><a href="#">Livraison</a></li>
                </ul>
            </div>
            <div className="column" id="liens">
                <h1 id="textFooter">PLUS DE LIENS</h1>
                <ul>
                    <li id="lien"><a href="#">Nouveautés</a></li>
                    <li id="lien"><a href="#">Promotions</a></li>
                </ul>
            </div>
            <div className="column" id="events">
                <h1 id="textFooter">EVENEMENTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Repellat a alias recusandae. Quis temporibus, in nisi impedit quisquam sunt odio deleniti quaerat</p>
            </div>
        </footer>


    );
}

export default Footer