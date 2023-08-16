import React, { useState, useEffect } from 'react';
import './styles.css';
import DeleteButton from './DeleteButton';
import axios from 'axios';
import { playersList } from '../utils/Utils';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then(res => {
            const currentList = res.data.sort((a, b) => a.name.localeCompare(b.name)); // alphabetizing
            setPlayers(currentList); 
        })
    }, [players])

    const deleteAndRemoveFromDom = playerId => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
        .then(res => {
            setPlayers(players.filter(player => player._id !== playerId));
        })
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Team? Name</th>
                        <th>Nickname</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                    {players.map((player, i) => {
                        return (
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.nickname}</td>
                                <td>{player.prefPosition}</td>
                                <td>
                                    <DeleteButton successCallback={() => deleteAndRemoveFromDom(player._id)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default PlayerList;

