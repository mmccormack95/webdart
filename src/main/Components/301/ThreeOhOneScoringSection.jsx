import React from "react";
import ScoreCard from "./ScoreCard";
import {useSelector} from "react-redux";
import {getWinningPlayer} from "../../selectors/players";
import WinningModal from "../WinningModal";

function ThreeOhOneScoringSection(props) {
    const winningPlayer = useSelector(getWinningPlayer);

    return <>
        {winningPlayer && <WinningModal name={winningPlayer.name}/>}
        <div className="scoringGrid">
            {props.players.threeOhOneplayers.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ThreeOhOneScoringSection;