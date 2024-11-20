import React from "react";
import MultiButton from "./MultiButton";
import {useDispatch, useSelector} from "react-redux";
import {addRound, handleRoundScoreChange, undoRound} from "../../actions/threeOhOneActions";
import {getCurrentRound, getPlayerTurn} from "../../selectors/threeOhOneSelector";

function InputSection(props) {
    const dispatch = useDispatch();
    const playerTurn = useSelector(getPlayerTurn);
    const round = useSelector(getCurrentRound);

    const addRounds = (e) => {
        const input = e.target.value
        dispatch(handleRoundScoreChange(input))
        dispatch(addRound(playerTurn))
    }

    const undoRoundAction = () => {
        dispatch(undoRound(playerTurn))
    }

    return <>
        <div className="input-section">
            {
                Array.from({length: 21}, (_, i) => i + 1).map(number => {
                    number = number === 21 ? 25 : number;
                    return (
                        <button key={number} value={number} onClick={addRounds}>
                            {number === 25 ? 'B' : number}
                        </button>
                    );
                })
            }
            <MultiButton name={props.turn}/>
            <button value={0} onClick={addRounds}>Miss</button>
            <button onClick={undoRoundAction}>Undo</button>
            <p>
                Round: {round.join(', ')}
            </p>
        </div>
    </>
}

export default InputSection;