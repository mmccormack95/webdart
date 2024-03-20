import React from "react";
import ScoreTable from "./ScoreTable";

function ScoreCard(props) {
    return <div className="scoreCard">
        <h2> {props.player.name} </h2>
        <ScoreTable player={props.player}/>
    </div>
}

export default ScoreCard;