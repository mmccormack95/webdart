import React from "react";
import {useDispatch} from "react-redux";
import {setMultiplier} from "../../actions/threeOhOneActions";

function MultiButton() {
    const dispatch = useDispatch();

    const onChangeMultiplier = (e) => {
        dispatch(setMultiplier(e.target.value))
    }

    return <div className="btn-group" role="group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" value={1} onClick={onChangeMultiplier} defaultChecked/>
        <label className="btn btn-outline-primary" htmlFor="btnradio1">x1</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value={2} onClick={onChangeMultiplier} />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">x2</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" value={3} onClick={onChangeMultiplier}/>
        <label className="btn btn-outline-primary" htmlFor="btnradio3">x3</label>
    </div>
}

export default MultiButton;