import React from "react";
import ScoreCard from "./ScoreCard";

function ScoringSection(props) {
    return <>
        <div className="scoringGrid">
            {props.threeOhOneplayers.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ScoringSection;