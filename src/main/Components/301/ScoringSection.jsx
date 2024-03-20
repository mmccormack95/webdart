import React from "react";
import ScoreCard from "./ScoreCard";
import {useSelector} from "react-redux";
import {getWinningPlayer} from "../../selectors/threeOhOneSelector";
import WinningModal from "../WinningModal";

function ScoringSection(props) {
    const winningPlayer = useSelector(getWinningPlayer);

    return <>
        {winningPlayer && <WinningModal name={winningPlayer.name}/>}
        <div className="scoringGrid">
            {props.players.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ScoringSection;