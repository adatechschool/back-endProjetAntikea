import React from "react";
import Connexion from "./components/Connection/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CardsProduits from "./components/CardsProduits/CardsProduits";
import Panier from "./components/Panier/Panier";
import FicheProduit from "./components/FicheProduit/FicheProduit";
import Sorting from "./components/Sorting/Sorting.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./components/Inscription/Inscription";

function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <Routes>
          {/* Pb de Route quand 2 path identiques (Sorting et CardProduit) avoir si mettre dans meme fichier */}
          <Route exact path="/" element={<Sorting />} />
          <Route exact path="/" element={<CardsProduits />} />
          
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/ficheproduit" element={<FicheProduit />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
