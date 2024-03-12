import React from "react";
import MultiButton from "./MultiButton";
import {useDispatch} from "react-redux";

function InputSection(props) {
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch({type: "SET_ROUND_SCORE", name: props.player.name, roundScore: e.target.value})
    }

    const addRounds = () => {
        dispatch({type: 'ADD_ROUND', name: props.player.name})
    }

    const resetRounds = () => {
        dispatch({type: 'RESET_ROUNDS', name: props.player.name})
    }

    return <div>
        <input type="number" placeholder="Enter Score" onInput={handleInput}/>
        <button onClick={addRounds}>Add</button>
        <button onClick={resetRounds}>Reset</button>
        <MultiButton name={props.player.name}/>
    </div>
}

export default InputSection;