import React from "react";
import Connexion from "./components/Connection/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CardsProduits from "./components/CardsProduits/CardsProduits";
import Panier from "./components/Panier/Panier";
import FicheProduit from "./components/FicheProduit/FicheProduit";
// import BasicExample from './components/Connection/Connexion';
import Sorting from "./components/Sorting/Sorting.js";
// Import des Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./components/Inscription/Inscription";

function App() {
  return (
    <div id="app">
      <Router>
        {/* Autres composants et contenu de l'application */}
        <Header />
        <Routes>
          <Route exact path="/" component={<Sorting />} />
          <Route exact path="/" component={<CardsProduits />} />
          <Route path="/connexion" component={<Connexion />} />
          <Route path="/panier" component={<Panier />} />
          <Route path="/ficheproduit" component={<FicheProduit />} />
          <Route path="/inscription" component={<Inscription />} />
        </Routes>
        <Footer />
        {/* <Button /> */}
      </Router>
    </div>
  );
}

export default App;
