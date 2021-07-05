import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {

  state = {
    //url: 'https://pokeapi.co/api/v2/pokemon/?offset=40&limit=40',
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (

      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard 
              nombre = {pokemon.name}
              url = {pokemon.url}
              />
            ))}
          </div>
        ) : ( 
          <h1>Sin pokemons</h1>
        )}
      </React.Fragment>
    );
  }

}