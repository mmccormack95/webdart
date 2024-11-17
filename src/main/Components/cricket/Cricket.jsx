import React from "react";
import ScoringLine from "./ScoringLine";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers, getRounds, getWinningPlayer} from "../../selectors/cricketSelector";
import WinningModal from "../general/WinningModal";
import {resetRounds} from "../../actions/cricketActions";
import NewGameButton from "../general/NewGameButton";

const Cricket = () => {
    const dispatch = useDispatch();
    const rounds = useSelector(getRounds);
    const players = useSelector(getPlayers);
    const winningPlayerAvailable = useSelector(getWinningPlayer);

    const newGameClick = () => {
        dispatch(resetRounds());
    };

    return (
        <>
            {winningPlayerAvailable && <WinningModal name={winningPlayerAvailable.name}/>}
            <NewGameButton resetRoundsAction={newGameClick}/>
            <div className="cricket-player-section">
                {players.map((player, index) => <span key={index} className="cricket-player">{player.name}: {player.totalScore}</span>)}
            </div>
            {rounds.map(round => <ScoringLine key={round} value={round}/>)}
        </>
    )
}

export default Cricket;