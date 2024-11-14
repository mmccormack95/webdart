import React from "react";
import ScoringLine from "./ScoringLine";
import {useSelector} from "react-redux";
import {getPlayers, getRounds} from "../../selectors/cricketSelector";

const Cricket = () => {
    const rounds = useSelector(getRounds);
    const players = useSelector(getPlayers);
    return (
        <div>
            <div className="cricket-player-section">
                {players.map(player => <span className="cricket-player">{player.name}: {player.totalScore}</span>)}
            </div>
            {rounds.map(round => <ScoringLine key={round} value={round}/>)}
        </div>
    )
}

export default Cricket;