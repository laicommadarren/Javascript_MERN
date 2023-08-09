import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const People = (props) => {
    const { id } = useParams();
    const [person, setPerson] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPerson(response.data);
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
                <h2>{person.name}</h2>
                <p><b>gender:</b> {person.gender}</p>
                <p><b>birth year:</b> {person.birth_year}</p>
                <p><b>height:</b> {person.height} cm</p>
                <p><b>weight:</b> {person.mass} kg</p>
            </>
        )
    }
}

export default People