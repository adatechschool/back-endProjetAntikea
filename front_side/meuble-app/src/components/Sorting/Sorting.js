import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Sorting.css";

function SortingComponent() {
  return (
    <div className="sorting">
      <ul>
        <div className="list-group">
          <a className="header">Nouveautés</a>
        </div>
        <br />
        <div className="list-group">
          <li>Meubles</li>
          <a href="#">Canapé</a>
          <a href="#">Chaise</a>
          <a href="#">Fauteuil</a>
          <a href="#">Banc</a>
        </div>
        <br />
        <div className="list-group">
          <li className="header"> Matière</li>
          <a href="#">Bois</a>
          <a href="#">Fer</a>
          <a href="#">Verre</a>
          <a href="#">Cuir</a>
        </div>
        <br />
        <div className="list-group">
          <li className="header">Couleurs</li>
          <Form.Label htmlFor="exampleColorInput" />
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#FFF951"
          />
        </div>
        <br />
        <div className="list-group">
          <li className="header">Prix</li>
          <br />
          <div className="filter-content">
            <div className="card-body">
              <div className="form-row">
                <div className="form-group col-md-1">
                  <label>Min</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0 €"
                    style={{ fontSize: "9px" }}
                  />
                </div>
                <br />
                <div className="form-group col-md-1 text-right">
                  <label>Max</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1000 €"
                    style={{ fontSize: "10px", display: "wrap" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default SortingComponent;
