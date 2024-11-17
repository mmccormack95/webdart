import React from "react";
import {useSelector} from "react-redux";
import {getGameMode} from "../../selectors/uiSelector";
import Cricket from "../cricket/Cricket";
import GameSelection from "./GameSelection";
import ThreeOhOne from "../301/ThreeOhOne";

function Game() {
    const {gameMode} = useSelector(getGameMode)

    return (
        <>
            <h2>{gameMode}</h2>
            <GameSelection/>
            {gameMode === "301" && (<>
                    <ThreeOhOne />
                </>
            )}
            {gameMode === "Cricket" && (<>
                    <Cricket/>
                </>
            )}
        </>
    )
}

export default Game;