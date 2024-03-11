import React from "react";
import ScoreCard from "./ScoreCard";

function ScoringSection(props) {
        return <>
            <div className="scoringGrid">
                {props.players.map((player, index) => <ScoreCard key={index} player={player} onRoundScoreChange={props.onRoundScoreChange} onAddRound={props.onAddRound} onReset={props.onReset} onChangeMultiplier={props.onChangeMultiplier}/>)}
            </div>
        </>
}

export default ScoringSection;