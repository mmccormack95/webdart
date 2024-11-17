import React from "react";
import ScoreCard from "./ScoreCard";
import {useSelector} from "react-redux";
import {getPlayers, getPlayerTurn, getWinningPlayer} from "../../selectors/threeOhOneSelector";
import WinningModal from "../general/WinningModal";
import InputSection from "./InputSection";

function ScoringSection() {
    const winningPlayer = useSelector(getWinningPlayer);
    const playerTurn = useSelector(getPlayerTurn);
    const players = useSelector(getPlayers);

    return <>
        {winningPlayer && <WinningModal name={winningPlayer.name}/>}
        <h2>{playerTurn} Turn</h2>
        <InputSection/>
        <div className="scoringGrid">
            {players.map((player, index) => <ScoreCard key={index} player={player}/>)}
        </div>
    </>
}

export default ScoringSection;