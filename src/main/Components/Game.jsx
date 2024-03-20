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
            {gameMode === "301" && (<>
                    <h2>301</h2>
                    <div className="newGameButtonGrid">
                        <button className="newGameButton" onClick={resetRoundsAction}>New Game</button>
                    </div>
                    <ScoringSection players={props.players.threeOhOne.players}/>
                </>
            )}
            {gameMode === "Cricket" && (<>
                    <h2>Cricket</h2>
                </>
            )}
        </>
    )
}

export default Game;