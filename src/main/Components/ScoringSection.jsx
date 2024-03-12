import React from "react";
import ScoreCard from "./ScoreCard";
import {addPlayer} from "../actions/actions";
import {useDispatch} from "react-redux";

function ScoringSection(props) {

    const dispatch = useDispatch();

    const addPlayers = () => {
        dispatch(addPlayer("Player " + (props.players.players.length + 1)));
    }
    return <>
        {/*<div className="scoringGrid">*/}
        {/*    {props.players.map((player, index) => <ScoreCard key={index} player={player} onRoundScoreChange={props.onRoundScoreChange} onAddRound={props.onAddRound} onReset={props.onReset} onChangeMultiplier={props.onChangeMultiplier}/>)}*/}
        {/*</div>*/}
        <button onClick={
            () => {
                addPlayers()
            }
        }>Add Player</button>
    </>
}

export default ScoringSection;