import React from "react";
import {useDispatch} from "react-redux";

function MultiButton(props) {
    const dispatch = useDispatch();

    const onChangeMultiplier = (e) => {
        dispatch({type: "SET_MULTIPLIER", name: props.name, multiplier: parseInt(e.target.id)})
    }

    return <div className='multiButton'>
        <input className='input-radio' name={props.name} type="radio" id="1" value="x1" onInput={onChangeMultiplier} defaultChecked/>
        <label htmlFor="1">x1</label>
        <input className='input-radio' name={props.name} type="radio" id="2" value="x2" onInput={onChangeMultiplier}/>
        <label htmlFor="2">x2</label>
        <input className='input-radio' name={props.name} type="radio" id="3" value="x3" onInput={onChangeMultiplier}/>
        <label htmlFor="3">x3</label>
    </div>
}

export default MultiButton;