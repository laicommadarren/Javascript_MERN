import React, { useState } from 'react'
import Display from './Display';

const ButtonForAPI = () => {
    const [pokemon, setPokemon] = useState();

    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                console.log(jsonResponse);
                setPokemon(jsonResponse);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <h1> Click to get Pokemon</h1>
            <button onClick={fetchPokemon}>Get Pokemon</button>
            {
                pokemon ?
                    <Display pokemon={pokemon} /> :
                    <h1> Click to get Pokemon list </h1>
            }

        </div>
    )
}

export default ButtonForAPI