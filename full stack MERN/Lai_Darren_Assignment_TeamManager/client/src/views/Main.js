import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';
import Status from '../components/StatusList';

export default () => {
    const [players, setPlayers] = useState([]);
    
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
    const updatePlayer = (playerId, playerChanges) => {
        axios.patch(`http://localhost:8000/api/players/${playerId}`, playerChanges)
        .then(res => console.log(res))
    }


    return (
        <div>
            
            {(window.location.pathname === "/players/list" || window.location.pathname === "/players/addplayer") &&
            <h2><Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link> </h2>}
            {window.location.pathname === "/players/list" &&
            <PlayerList players={players} deleteAndRemove={deleteAndRemoveFromDom} />}
            {window.location.pathname === "/players/addplayer" &&
            <PlayerForm />}
            {window.location.pathname.indexOf("game") > -1 &&
            <Status players={players} updatePlayer={updatePlayer}/>}
        </div>
    )
}