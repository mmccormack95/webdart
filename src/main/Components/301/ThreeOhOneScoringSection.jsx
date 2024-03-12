import React from "react";
import ScoreCard from "./ScoreCard";
import {useSelector} from "react-redux";
import {getPlayerScores} from "../../selectors/players";

function ThreeOhOneScoringSection(props) {
    const playerScores = useSelector(getPlayerScores);

    console.log(playerScores);
    return <>
        <div className="scoringGrid">
            {props.players.threeOhOneplayers.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ThreeOhOneScoringSection;