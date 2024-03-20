import React from "react";
import ScoringSection from "./301/ScoringSection";
import {useDispatch, useSelector} from "react-redux";
import {resetRounds} from "../actions/threeOhOneActions";
import {getGameMode} from "../selectors/uiSelector";

function Game(props) {
    const {gameMode} = useSelector(getGameMode)
    const dispatch = useDispatch();

    const resetRoundsAction = () => {
        dispatch(resetRounds())
    }

    return (
        <>
            <h2>{gameMode}</h2>
            {gameMode === "301" && (<>
                    <div className="newGameButtonGrid">
                        <button className="newGameButton" onClick={resetRoundsAction}>New Game</button>
                    </div>
                    <ScoringSection players={props.players.threeOhOne.players}/>
                </>
            )}
            {gameMode === "Cricket" && (<>
                </>
            )}
        </>
    )
}

export default Game;