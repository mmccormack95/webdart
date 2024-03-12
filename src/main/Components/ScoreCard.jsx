import React from "react";
import MultiButton from "./MultiButton";
import {useDispatch} from "react-redux";

function ScoreCard(props) {

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

    return <div className="scoreCard">
        <h2> {props.player.name} </h2>
        <div>
            <input type="number" placeholder="Enter Score" onInput={handleInput}/>
            <button onClick={addRounds}>Add</button>
            <button onClick={resetRounds}>Reset</button>
            <MultiButton name={props.player.name}/>
        </div>
        <div>
            {props.player.rounds.map((round, index) => <p key={index}>Round {index + 1}: {round}</p>)}
            <p>Score: {props.player.totalScore}</p>
        </div>
    </div>
}

export default ScoreCard;