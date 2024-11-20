import React from "react";
import {useDispatch} from "react-redux";
import {setGame} from "../../actions/uiActions";
import {setMultiplier} from "../../actions/threeOhOneActions";

function GameSelection() {
    const dispatch = useDispatch();

    const gameSelect = (e) => {
        if (e.target.value === '301') {
            dispatch(setMultiplier(1))
        }
        dispatch(setGame(e.target.value))
    }

    return <div className='gameSelection'>
        <label htmlFor="gameType">Game Type: </label>
        <select name="gameType" id="gameType" onChange={gameSelect}>
            <option value="301">301</option>
            <option value="Cricket">Cricket</option>
        </select>
    </div>
}

export default GameSelection;