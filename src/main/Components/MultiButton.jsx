import React from "react";


function MultiButton(props) {
    function onChangeMultiplier(name, multiplier) {
        return () => {
            props.onChangeMultiplier(name, multiplier);
        }
    }
    return <div className='multiButton'>
        <input className='input-radio' name={props.name} type="radio" id="1" value="x1" onInput={onChangeMultiplier(props.name, 1)} defaultChecked/>
        <label htmlFor="1">x1</label>
        <input className='input-radio' name={props.name} type="radio" id="2" value="x2" onInput={onChangeMultiplier(props.name, 2)}/>
        <label htmlFor="2">x2</label>
        <input className='input-radio' name={props.name} type="radio" id="3" value="x3" onInput={onChangeMultiplier(props.name, 3)}/>
        <label htmlFor="3">x3</label>
    </div>
}

export default MultiButton;