import React from "react";
import {resetRounds} from "../../actions/threeOhOneActions";
import NewGameButton from "../general/NewGameButton";
import ScoringSection from "./ScoringSection";
import {useDispatch} from "react-redux";

const ThreeOhOne = () => {
    const dispatch = useDispatch();

    const resetRoundsAction = () => {
        dispatch(resetRounds())
    }

    return (<>
            <NewGameButton resetRoundsAction={resetRoundsAction}/>
            <ScoringSection/>
        </>
    );
}

export default ThreeOhOne;