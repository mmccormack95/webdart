import React from "react";
import MultiButton from "./MultiButton";
import {useDispatch, useSelector} from "react-redux";
import {addRound, handleRoundScoreChange, undoRound} from "../../actions/threeOhOneActions";
import {getPlayerTurn} from "../../selectors/threeOhOneSelector";

function InputSection(props) {
    const dispatch = useDispatch();
    const playerTurn = useSelector(getPlayerTurn);

    const addRounds = () => {
        const input = document.getElementById('inputBar').value;
        dispatch(handleRoundScoreChange(input))
        dispatch(addRound(playerTurn))
        document.getElementById('inputBar').value = '0';
    }

    const undoRoundAction = () => {
        dispatch(undoRound(playerTurn))
    }

    return <div className="input-section">
        <input id="inputBar" type="number" placeholder="Enter Score" defaultValue='0'/>
        <button onClick={addRounds}>Add</button>
        <button onClick={undoRoundAction}>Undo</button>
        <MultiButton name={props.turn}/>
    </div>
}

export default InputSection;