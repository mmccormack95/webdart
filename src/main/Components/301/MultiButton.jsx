import React from "react";
import {useDispatch} from "react-redux";
import {setMultiplier} from "../../actions/threeOhOneActions";

function MultiButton() {
    const dispatch = useDispatch();

    const onChangeMultiplier = (e) => {
        dispatch(setMultiplier(e.target.value))
    }

    return <div className='multiButton'>
        <input className='input-radio' name="multi" type="radio" id="x1" value="1" onInput={onChangeMultiplier} defaultChecked/>
        <label htmlFor="1">x1</label>
        <input className='input-radio' name="multi" type="radio" id="x2" value="2" onInput={onChangeMultiplier}/>
        <label htmlFor="2">x2</label>
        <input className='input-radio' name="multi" type="radio" id="x3" value="3" onInput={onChangeMultiplier}/>
        <label htmlFor="3">x3</label>
    </div>
}

export default MultiButton;