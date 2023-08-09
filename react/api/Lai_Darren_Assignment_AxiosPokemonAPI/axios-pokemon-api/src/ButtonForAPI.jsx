import React, { useState } from 'react';
import Display from './Display';
import axios from 'axios';

const ButtonForAPI = () => {
    const [pokemon, setPokemon] = useState();

    const fetchPokemonAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`)
            .then(response => {
                setPokemon(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1> Click to get Pokemon</h1>
            <button onClick={fetchPokemonAxios}>Get Pokemon</button>
            {
                pokemon ?
                    <Display pokemon={pokemon} /> :
                    <h1> Click to get Pokemon list </h1>
            }

        </div>
    )
}

export default ButtonForAPI