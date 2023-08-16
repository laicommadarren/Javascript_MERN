import React from 'react';
import { useParams, Link} from 'react-router-dom';
import './styles.css';

const Status = (props) => {
    const { players, updatePlayer } = props;
    const {id} = useParams();

    return (
        <>
            <h2>Player Status - Game {id}</h2>
            <h2><Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link></h2>
            <table>
                <tbody>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                    {players.map((player, i) => {
                        return (
                            <tr key={i}>
                                <td>{player.name}</td>
                                <td>
                                    {player.status === "playing" ?
                                        <button style={{ backgroundColor: "green" }}>Playing</button> :
                                        <button onClick={() => updatePlayer(player._id, { status: "playing" })} style={{ backgroundColor: "white" }}>Playing</button>}
                                    {player.status === "notPlaying" ?
                                        <button style={{ backgroundColor: "red" }}>Not Playing</button> :
                                        <button onClick={() => updatePlayer(player._id, { status: "notPlaying" })} style={{ backgroundColor: "white" }}>Not Playing</button>}
                                    {player.status === "undecided" ?
                                        <button style={{ backgroundColor: "yellow" }}>Undecided</button> :
                                        <button onClick={() => updatePlayer(player._id, { status: "undecided" })} style={{ backgroundColor: "white" }}>Undecided</button>}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Status;

