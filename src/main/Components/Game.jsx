import React from "react";
import ThreeOhOneScoringSection from "./301/ThreeOhOneScoringSection";
import {getGameMode} from "../selectors/players";
import {useDispatch, useSelector} from "react-redux";

function Game(props) {
    const {gameMode} = useSelector(getGameMode)
    const dispatch = useDispatch();

    const resetRounds = () => {
        dispatch({type: "RESET_ROUNDS"})
    }

    return (
        <>
            {gameMode === "301" && (<>
                    <h2>301</h2>
                    <div className="newGameButtonGrid">
                        <button className="newGameButton" onClick={resetRounds}>New Game</button>
                    </div>
                    <ThreeOhOneScoringSection players={props.players.players}/>
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