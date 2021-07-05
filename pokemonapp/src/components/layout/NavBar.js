import React, { Component } from "react";
import styled from 'styled-components';



export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light" style={{ backgroundColor: "#00BFFF" }}>
          <div class="container-fluid">
            <a class="navbar-brand" href="">Pokemon App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Juegos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Locaciones</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pokémons</a>
                </li>

              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-success" type="submit">Buscar</button>
              </form>
            </div>


          </div>
        </nav>
      </div>
    )
  }
}