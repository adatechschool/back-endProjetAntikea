import React from "react";
import Connexion from "./components/Connection/Connexion";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CardsProduits from "./components/CardsProduits/CardsProduits"
// import BasicExample from './components/Connection/Connexion';
import Sorting from "./components/Sorting/Sorting.js";
// Import des Routes
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div id="app">
      <Router>
      {/* Autres composants et contenu de l'application */}
        <Header />
          <Routes>
            <Route path="/main" component={Sorting} />
            <Route path="/main" component={CardsProduits} />
            <Route path="/connexion" component={Connexion} />
          </Routes>
        <Footer />
      {/* <Button /> */}
      </Router>
    </div>
    
  );
}

export default App;
