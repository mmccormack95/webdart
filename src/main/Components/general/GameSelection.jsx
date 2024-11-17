import React from "react";
import {useDispatch} from "react-redux";
import {setGame} from "../../actions/uiActions";

function GameSelection() {
    const dispatch = useDispatch();

    const gameSelect = (e) => {
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