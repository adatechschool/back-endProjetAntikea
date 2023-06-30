import React from "react";
import logo from "./logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="column" id="norm">
        <img src={logo} class="logo2" alt="logo" />
        <p>
          Fabriqué, avec amour et résilience. Beaucoup de résilience.
          <br />
          A Ada Tech School
          <br />
          3 bd Stalingrad, 44000
          <br />
          Nantes
        </p>
        <a href="#">contact@antikea.fr</a>
      </div>
      <div className="column" id="shopping">
        <h1 id="textFooter">SHOPPING</h1>
        <ul>
          <li id="lien">
            <a href="#">Votre panier</a>
          </li>
          <li id="lien">
            <a href="#">Vos commandes</a>
          </li>
          <li id="lien">
            <a href="#">Vos favoris</a>
          </li>
          <li id="lien">
            <a href="#">Livraison</a>
          </li>
        </ul>
      </div>
      <div className="column" id="liens">
        <h1 id="textFooter">PLUS DE LIENS</h1>
        <ul>
          <li id="lien">
            <a href="#">Nouveautés</a>
          </li>
          <li id="lien">
            <a href="#">Promotions</a>
          </li>
        </ul>
      </div>
      <div className="column" id="events">
        <h1 id="textFooter">EVENEMENTS</h1>
        <p>
          Un site de Aïssata Diallo, Alissia Leroy, Elsa Catoire, Gianni
          Accardi, Quentin Rousseau, Marion Lopez, Meghan Grousset et Sébastien
          Fougère.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
