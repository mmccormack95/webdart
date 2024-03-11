import React, {useState} from "react";
import MultiButton from "./MultiButton";

function InputSection(props) {
    const [score, setScore] = useState(0);

    const handleInput = (e) => {
        setScore(e.target.value);
        props.onRoundScoreChange(props.player.name, e.target.value);
    }

    const onAdd = () => {
        props.onAddRound(props.player.name, score * props.player.multiplier);
    }

    const onReset = () => {
        props.onReset(props.player.name);
    }

    return <div>
        <input type="number" placeholder="Enter Score" onInput={handleInput}/>
        <button onClick={onAdd}>Add</button>
        <button onClick={onReset}>Reset</button>
        <MultiButton name={props.player.name} onChangeMultiplier={props.onChangeMultiplier}/>
    </div>
}

export default InputSection;