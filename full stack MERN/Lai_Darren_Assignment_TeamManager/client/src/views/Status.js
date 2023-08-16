import React from "react";
import Status from "../components/StatusList";
import { useParams } from "react-router-dom";

export default () => {
    const {id} = useParams()
    return (
    <>
        <h2>Player Status - Game {id}</h2>
        <Status/>
    </>
    )
}