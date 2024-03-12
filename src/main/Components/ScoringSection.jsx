import React from "react";
import ScoreCard from "./ScoreCard";

function ScoringSection(props) {
    return <>
        <div className="scoringGrid">
            {props.players.players.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ScoringSection;