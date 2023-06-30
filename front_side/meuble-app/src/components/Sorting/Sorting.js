import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Sorting.css";

function SortingComponent() {
  return (
    <div>
      <ul>
        <div class="list-group">
          <a class="header">Nouveautés</a>
        </div>
        <br />
        <div class="list-group">
          <li>Meubles</li>
          <a href="#">Canapé</a>
          <a href="#">Chaise</a>
          <a href="#">Fauteuil</a>
          <a href="#">Banc</a>
        </div>
        <br />
        <div class="list-group">
          <li class="header"> Matière</li>
          <a href="#">Bois</a>
          <a href="#">Fer</a>
          <a href="#">Verre</a>
          <a href="#">Cuir</a>
        </div>
        <br />
        <div class="list-group">
          <li class="header">Couleurs</li>
          <Form.Label htmlFor="exampleColorInput" />
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#FFF951"
          />
        </div>
        <br />
        <div class="list-group">
          <li class="header">Prix</li>
          <br />
          <div class="filter-content">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-md-1">
                  <label>Min</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="0 €"
                    style={{ fontSize: "9px" }}
                  />
                </div>
                <br />
                <div class="form-group col-md-1 text-right">
                  <label>Max</label>
                  <input
                    type="number"
                    class="form-control"
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
