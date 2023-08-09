import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Planets = (props) => {
    const { id } = useParams();
    const [planet, setPlanet] = useState([])
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanet(response.data);
                setIsError(false);
            })
            .catch(error => {
                console.log(error);
                setIsError(true);
            });
    }, [id]);
    if (isError) {
        return (
            <>
            <p>These aren't the droids you're looking for</p>
            <img src="https://static.wikia.nocookie.net/disney/images/e/eb/Profile_-_Obi-Wan_Kenobi.jpg"></img>
            </>
        )
    }
    else {
        return (
            <>
                <h2>{planet.name}</h2>
                <p><b>terrain:</b> {planet.terrain}</p>
                <p><b>climate:</b> {planet.climate}</p>
                <p><b>diameter:</b> {planet.diameter} km</p>
                <p><b>population:</b> {planet.population}</p>
            </>
        )
    }
}

export default Planets