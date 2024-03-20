import React from "react";
import MultiButton from "./MultiButton";
import {useDispatch} from "react-redux";
import {addRound, handleRoundScoreChange, undoRound} from "../../actions/threeOhOneActions";

function InputSection(props) {
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(handleRoundScoreChange(props.player.name, e.target.value))
    }

    const addRounds = () => {
        dispatch(addRound(props.player.name))
    }

    const undoRoundAction = () => {
        dispatch(undoRound(props.player.name))
    }

    return <div>
        <input type="number" placeholder="Enter Score" onInput={handleInput}/>
        <button onClick={addRounds}>Add</button>
        <button onClick={undoRoundAction}>Undo</button>
        <MultiButton name={props.player.name}/>
    </div>
}

export default InputSection;