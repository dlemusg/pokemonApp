import React, { Component } from 'react';
import axios from 'axios';

export default class Pokemon extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
    };


    async componentDidMount() {
        const { pokemonId } = this.props.match.params;

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;

        const pokemonRes = await axios.get(pokemonUrl);
        const nombre = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_default;



        this.setState({
            nombre,
            pokemonId,
            imageUrl
        })

    }

    
    render() {
        return (
            <div>
                <h1>{this.state.nombre}</h1>
            </div>
        );
    }
}