import React from "react";
import ThreeOhOneScoringSection from "./301/ThreeOhOneScoringSection";
import {getGameMode} from "../selectors/players";
import {useSelector} from "react-redux";

function Game(props) {
    const {gameMode} = useSelector(getGameMode)

    return (
        <>
            {gameMode === "301" && (<>
                    <h2>301</h2>
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