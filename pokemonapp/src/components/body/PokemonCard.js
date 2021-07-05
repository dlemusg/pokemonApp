import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

<Sprite />

export default class PokemonCard extends Component {
  state = {
    nombre: '',
    imgUrl: '',
    pokemonId: ''
  }

  componentDidMount() {
    // const { nombre, url } = this.props;
    const nombre = this.props.nombre;
    const url = this.props.url;

    const pokemonId = url.split("/")[url.split('/').length - 2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png?`

    this.setState({
      nombre: nombre,
      imgUrl: imgUrl,
      pokemonId: pokemonId,
      imageLoading: true,
      toManyRequests: false

    })

  }

  render() {

    return (
      <div className='col-md-3 col-sm-6 mb-5'>
        <Link to = {`pokemon/${this.state.pokemonId}`}>
          <div className="card">

            <h5 className="card-header">{this.state.nombre}</h5>

            <div className="card-body mx-auto">
              <Sprite
                className="card-img-top rounded mx-auto mt-2"
                onload={() => this.setState({ imageLoading: false })}
                onError={() => this.setState({ toManyRequests: true })}
                src={this.state.imgUrl}
              />

              <h6 className="card-title">{this.state.nombre}</h6>

            </div>

          </div>
        </Link>

      </div>
    )
  }

}