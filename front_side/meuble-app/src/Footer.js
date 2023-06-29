import React from 'react';

function Footer() {
  return (
    <footer>
  <div class="column">
    <div id="norm">
      <h1>ANTIKEA</h1>
      <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit</p>
      <p>3 bd Stalingrad, 44000<br/>Nantes</p>
      <p href="">contact@antikea.fr</p>
    </div>
  </div>
  <div class="column">
    <div id="shopping">
      <h1>SHOPPING</h1>
      <ul>
        <li><a href="#">Votre panier</a></li>
        <li><a href="#">Vos commandes</a></li>
        <li><a href="#">Vos favoris</a></li>
        <li><a href="#">Livraison</a></li>
      </ul>
    </div>
  </div>
  <div class="column">
    <div id="liens">
      <h1>PLUS DE LIENS</h1>
      <ul>
        <li><a href="#">Nouveautés</a></li>
        <li><a href="#">Promotions</a></li>
      </ul>
    </div>
  </div>
  <div class="column">
    <div id="events">
      <h1>EVENEMENTS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Repellat a alias recusandae. Quis temporibus, in nisi impedit quisquam sunt odio deleniti quaerat, <br/>consectetur sapiente nam voluptates, tempore distinctio similique libero.</p>
    </div>
  </div>
</footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'left',
  },
  text: {
    color: '#666',
    fontSize: '14px',
  },
};

export default Footer;