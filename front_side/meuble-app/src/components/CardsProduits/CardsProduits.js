//Elements cards X2 qui affiche les produits en utilisant .map sur un objet/tableau
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CardsProduits.css";
// import products from "./public/antikea.meubles.json" (attention chemin à revoir)

const products = [
  {
    _id: {
      $oid: "649c311fe53710ff6ee4bd0b",
    },
    nom: "Table",
    type: "Meuble",
    prix: 100,
    image:
      "https://www.atelierdupetitparc.fr/wp-content/uploads/2021/01/table-teck-scandinave-vintage-I695_a.jpg",
    couleur: "blanc",
    description: "Une belle table en bois",
    dimensions: "100x50x75",
    matière: "bois",
    stock: 10,
    etat: "neuf",
    id_vendeur: "123abc",
    date_d_ajout: "2023-06-28",
    statut: "En cours",
  },
  {
    _id: {
      $oid: "649c32f6e53710ff6ee4bd0c",
    },
    nom: "Table1",
    type: "Table",
    prix: 100,
    image:
      "https://www.atelierdupetitparc.fr/wp-content/uploads/2021/01/table-teck-scandinave-vintage-I695_a.jpg",
    couleur: "Blanc",
    description: "Une belle table",
    dimensions: "100x50x70",
    matière: "Bois",
    stock: 10,
    etat: "Neuf",
    id_vendeur: "V001",
    date_d_ajout: "2023-06-28",
    statut: "Livré",
  },
];
console.log(products);

function CardsProduits() {
  return (
    //changer md={2} pour afficher + ou - de cards (ici initialisé à 2)
    <div className="Cards">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={products[idx].image}
                className="product-image"
                alt="Card image"
              />
              <Card.Body
                style={{
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Card.Title
                  className="Cards-titre"
                  style={{
                    display: "contents",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {products[idx].nom}
                </Card.Title>
                <Card.Text
                  className="Cards-description"
                  style={{ fontSize: "14px" }}
                >
                  <p>{products[idx].description}</p>
                  <p>{products[idx].prix} €</p>
                </Card.Text>
              </Card.Body>
              {/* Bouton acheter fonctionnalité à rajouter */}
              <a
                href="#"
                class="btn btn-dark"
                style={{ fontWeight: "bold", color: "#FFF951" }}
              >
                Acheter
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardsProduits;
