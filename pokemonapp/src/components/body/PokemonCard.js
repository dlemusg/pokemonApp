import React, { Component } from 'react'


export default class PokemonCard extends Component {
    state = {
        nombre: '',
        imgUrl: '',
        pokemonId: ''
    }

    componentDidMount(){
        // const { nombre, url } = this.props;
        const nombre = this.props.nombre;
        const url = this.props.url;

        const pokemonId = url.split("/")[url.split('/').length - 2];
        const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png?'
        
        this.setState({
            nombre: nombre,
            imgUrl: imgUrl,
            pokemonId: pokemonId 
        })

    }

    render() {
        
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className="card">
                    <div className="card-header">
                        <h5>{this.state.nombre}</h5>
                    </div>
                    <div className="card-body mx-auto">
                    <h6 className="card-title">{this.state.nombre}</h6>


                    </div>

                </div>

            </div>
        )
    }

}