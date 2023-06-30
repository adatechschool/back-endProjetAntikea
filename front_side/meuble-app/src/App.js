import React from "react";
import Connexion from "./components/Connection/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import BasicExample from './components/Connection/Connexion';
import Sorting from "./components/Sorting/Sorting.js";
import products from "./public/antikea.meubles.json";

function App() {
  return (
    <div id="app">
      {/* Autres composants et contenu de l'application */}
      <Header />
      <Connexion />
      <Footer />
      {/* <Button /> */}
    </div>
  );
}

export default App;
