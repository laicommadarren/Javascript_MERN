import React from "react"
import { Link } from "react-router-dom"

export default () => {
    return (
    <h2><Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link> </h2>
    )
}
