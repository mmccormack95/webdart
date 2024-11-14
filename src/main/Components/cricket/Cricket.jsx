import React from "react";
import ScoringLine from "./ScoringLine";
import {useSelector} from "react-redux";
import {getRounds} from "../../selectors/cricketSelector";

const Cricket = () => {
    const rounds = useSelector(getRounds);
    return (
        <div>
            {rounds.map(round => <ScoringLine key={round} value={round} />)}
        </div>
    )
}

export default Cricket;