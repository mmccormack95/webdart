import React, {useState} from "react";
import InputSection from "./InputSection";
import ScoreTable from "./ScoreTable";
import MultiButton from "./MultiButton";

function ScoreCard(props) {
    // return <div className="scoreCard">
    //     <h2> {props.player.name} </h2>
    //     <div>
    //         <InputSection player={props.player} onChangeMultiplier={props.onChangeMultiplier} onRoundScoreChange={props.onRoundScoreChange} onAddRound={props.onAddRound}/>
    //         <ScoreTable player={props.player}/>
    //     </div>
    // </div>
    const [score, setScore] = useState(0);

    const handleInput = (e) => {
        props.onRoundScoreChange(props.player.name, e.target.value);
    }

    const onAdd = () => {
        setScore(props.player.score + (props.player.roundScore * props.player.multiplier));
        props.onAddRound(props.player.name, props.player.roundScore * props.player.multiplier);
    }

    const onReset = () => {
        props.onReset(props.player.name);
    }

    return <div className="scoreCard">
        <h2> {props.player.name} </h2>
        <div>
            <input type="number" placeholder="Enter Score" onInput={handleInput}/>
            <button onClick={onAdd}>Add</button>
            <button onClick={onReset}>Reset</button>
            <MultiButton name={props.player.name} onChangeMultiplier={props.onChangeMultiplier}/>
        </div>
        <div>
            {props.player.rounds.map((round, index) => <p key={index}>Round {index + 1}: {round}</p>)}
            <p>Score: {score}</p>
        </div>
    </div>
}

export default ScoreCard;