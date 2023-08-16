import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';
import Status from '../components/Status';

export default () => {
    const [players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then(res => {
            // const currentList = res.data.sort((a, b) => a.name.localeCompare(b.name));
            // console.log(currentList);
            setPlayers(res.data);
        })
    }, [players])

    const deleteAndRemoveFromDom = playerId => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
        .then(res => {
            setPlayers(players.filter(player => player._id !== playerId));
        })
    }

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
        .then(res => {
            setPlayers([...players, res.data]);
            navigate('/players/list');
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArray = [];
            for (const key of Object.keys(errorResponse)) {
                errorArray.push(errorResponse[key].message)
            }
            setErrors(errorArray);
        });
    }
    const updatePlayer = (playerId, playerChanges) => {
        axios.patch(`http://localhost:8000/api/players/${playerId}`, playerChanges)
        .then(res => console.log(res))
    }


    return (
        <div>
            <h3><Link to="/players/list">Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link></h3>
            {(window.location.pathname === "/players/list" || window.location.pathname === "/players/addplayer") &&
            <h2><Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link> </h2>}
            {window.location.pathname === "/players/list" &&
            <PlayerList players={players} deleteAndRemove={deleteAndRemoveFromDom} />}
            {window.location.pathname === "/players/addplayer" &&
            <PlayerForm initialName="" onSubmitProp={createPlayer} errors={errors}/>}
            {window.location.pathname.indexOf("game") > -1 &&
            <Status players={players} updatePlayer={updatePlayer}/>}
        </div>
    )
}