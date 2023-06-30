import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div class="column" id="norm">
                <h1>ANTIKEA</h1>
                <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit<br/>
                3 bd Stalingrad, 44000<br />Nantes</p>
                <a href="#">contact@antikea.fr</a>
            </div>
            <div class="column" id="shopping">
                <h1 id="textFooter">SHOPPING</h1>
                <ul id="lien">
                    <li><a href="#">Votre panier</a></li>
                    <li><a href="#">Vos commandes</a></li>
                    <li><a href="#">Vos favoris</a></li>
                    <li><a href="#">Livraison</a></li>
                </ul>
            </div>
            <div class="column" id="liens">
                <h1 id="textFooter">PLUS DE LIENS</h1>
                <ul id="lien">
                    <li><a href="#">Nouveautés</a></li>
                    <li><a href="#">Promotions</a></li>
                </ul>
            </div>
            <div class="column" id="events">
                <h1 id="textFooter">EVENEMENTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Repellat a alias recusandae. Quis temporibus, in nisi impedit quisquam sunt odio deleniti quaerat,<br />consectetur sapiente nam voluptates, tempore distinctio similique libero.</p>
            </div>
        </footer>


    );
}

export default Footer