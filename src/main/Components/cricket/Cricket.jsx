import React from "react";
import ScoringLine from "./ScoringLine";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers, getRounds, getWinningPlayer} from "../../selectors/cricketSelector";
import WinningModal from "../WinningModal";
import {resetRounds} from "../../actions/cricketActions";

const Cricket = () => {
    const dispatch = useDispatch();
    const rounds = useSelector(getRounds);
    const players = useSelector(getPlayers);
    const winningPlayerAvailable = useSelector(getWinningPlayer);

    const newGameClick = () => {
        dispatch(resetRounds());
    };

    return (
        <div>
            {winningPlayerAvailable && <WinningModal name={winningPlayerAvailable.name}/>}
            <div className="newGameButtonGrid">
                <button className="newGameButton" onClick={newGameClick}>
                    New Game
                </button>
            </div>
            <div className="cricket-player-section">
                {players.map(player => <span className="cricket-player">{player.name}: {player.totalScore}</span>)}
            </div>
            {rounds.map(round => <ScoringLine key={round} value={round}/>)}
        </div>
    )
}

export default Cricket;