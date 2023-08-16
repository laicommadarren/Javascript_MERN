import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import DeleteButton from './DeleteButton';

const PlayerList = (props) => {
    const { players, deleteAndRemove } = props;

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Team? Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                    {players.map((player, i) => {
                        return (
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>{player.prefPosition}</td>
                                <td>
                                    <DeleteButton successCallback={() => deleteAndRemove(player._id)} />
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

