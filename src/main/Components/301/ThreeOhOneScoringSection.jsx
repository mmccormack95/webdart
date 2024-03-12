import React from "react";
import ScoreCard from "./ScoreCard";

function ThreeOhOneScoringSection(props) {
    return <>
        <div className="scoringGrid">
            {props.players.threeOhOneplayers.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ThreeOhOneScoringSection;