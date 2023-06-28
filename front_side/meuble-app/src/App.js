import React from "react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <h1>Bienvenue dans mon application React !</h1>
      <p>C'est un exemple de code.</p>
    </div>
  );
}

const App = () => (
  <div>
    <h3>GeeksforGeeks</h3>
    <h2>Sticky Footer using Reactjs!</h2>
    <Footer />
  </div>
);

export default App;