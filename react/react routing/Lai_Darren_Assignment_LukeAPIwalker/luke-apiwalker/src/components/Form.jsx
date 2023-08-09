import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Form = (props) => {
    const [category, setCategory] = useState("planets");
    const [personId, setPersonId] = useState(1);
    const navigate = useNavigate();
    const handleSubmit = ((e) => {

        e.preventDefault();
        navigate(`/${category}/${personId}`)
    })
    return (
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            Search for:
            <select onChange={(e) => setCategory(e.target.value)} name="category">
                <option value="planets">Planets</option>
                {/* <option value="spaceships">Spaceships</option>
        <option value="vehicles">Vehicles</option> */}
                <option value="people">People</option>
                {/* <option value="films">Films</option>
        <option value="species">Species</option> */}
            </select>
            ID:
            <input onChange={(e) => setPersonId(e.target.value)} type="number"></input>
            <button type="submit">Search</button>
            {/* need a preventDefault somewhere to handle this */}
        </form>
    )
}

export default Form