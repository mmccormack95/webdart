import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {tally1Increase, tally1Score, tally2Increase, tally2Score} from "../../actions/cricketActions";
import {getTally1, getTally2} from "../../selectors/cricketSelector";

const ScoringLine = (props) => {

    const dispatch = useDispatch();
    const tally1 = useSelector(getTally1);
    const tally2 = useSelector(getTally2);

    const tallySymbols = ['_', '/', 'X', '⛒'];

    const onClickTally1 = () => {
        dispatch(tally1Score(props.value));
        dispatch(tally1Increase(props.value));
    }

    const onClickTally2 = () => {
        dispatch(tally2Score(props.value));
        dispatch(tally2Increase(props.value));
    }

    return (
        <div className='tally-div'>
            <button className='cricket-button' onClick={onClickTally1}>
                {tallySymbols[tally1.find(tally => tally[0] === props.value)[1]]}
            </button>
            <span className='cricket-tally'>
                {props.value}
            </span>
            <button className='cricket-button' onClick={onClickTally2}>
                {tallySymbols[tally2.find(tally => tally[0] === props.value)[1]]}
            </button>
        </div>
    )
}

export default ScoringLine;