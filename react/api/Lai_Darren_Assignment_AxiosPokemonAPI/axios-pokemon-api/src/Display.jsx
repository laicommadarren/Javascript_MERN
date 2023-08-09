import React from 'react'

const Display = (props) => {
    return (
        <>
            <ul>
                {props.pokemon.results.map((e) => {
                    return <li>{e.name}</li>
                })};
            </ul>
        </>
    )
}

export default Display