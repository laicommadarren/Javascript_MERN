import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default (props => {
    const [name, setName] = useState("");
    const [prefPosition, setPrefPosition] = useState("")
    const [isError, setIsError] = useState(false);
    const nameValidationMsg = "Name must be at least 3 characters"
    const [nickname, setNickname] = useState("");
    const [nameErrors, setNameErrors] = useState([]);
    const [nicknameErrors, setNicknameErrors] = useState([]);
    const navigate = useNavigate();
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
        .then(res => {
            navigate('/players/list');
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            console.log(errorResponse);
            const nameErrorArray = [];
            const nicknameErrorArray = [];
            nameErrorArray.push(errorResponse.name.message);
            setNameErrors(nameErrorArray);
            nicknameErrorArray.push(errorResponse.nickname.message);
            setNicknameErrors(nicknameErrorArray);
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        createPlayer({ name, nickname, prefPosition })
        setName("");
        setNickname("");
    }
    const handleChange = e => {
        setName(e.target.value);
        e.target.value.length < 3 ? setIsError(true) : setIsError(false);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input type="text" onChange={(e) => handleChange(e)} value={name} />
            </p>
            {nameErrors.map((err, index) => <p key={index}>{err}</p>)}
            <p>{isError && nameValidationMsg}</p>

            <p>
                <label>Nickname</label><br />
                <input type="text" onChange={(e) => setNickname(e.target.value)} value={nickname} />
            </p>
            {nicknameErrors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
            <label>Preferred Position</label><br />
                <input type="text" onChange={(e) => setPrefPosition(e.target.value)} value={prefPosition} />
            </p>
            <input type="submit" disabled = {name.length<3}/>
        </form>
    )

})