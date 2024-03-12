import React from "react";
import InputSection from "./InputSection";
import ScoreTable from "./ScoreTable";

function ScoreCard(props) {
    return <div className="scoreCard">
        <h2> {props.player.name} </h2>
        <InputSection player={props.player}/>
        <ScoreTable player={props.player}/>
    </div>
}

export default ScoreCard;