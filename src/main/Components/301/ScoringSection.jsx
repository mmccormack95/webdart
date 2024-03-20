import React from "react";
import ScoreCard from "./ScoreCard";
import {useSelector} from "react-redux";
import {getPlayerTurn, getWinningPlayer} from "../../selectors/threeOhOneSelector";
import WinningModal from "../WinningModal";
import InputSection from "./InputSection";

function ScoringSection(props) {
    const winningPlayer = useSelector(getWinningPlayer);
    const playerTurn = useSelector(getPlayerTurn);

    return <>
        {winningPlayer && <WinningModal name={winningPlayer.name}/>}
        <h2>{playerTurn} Turn</h2>
        <InputSection/>
        <div className="scoringGrid">
            {props.players.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ScoringSection;