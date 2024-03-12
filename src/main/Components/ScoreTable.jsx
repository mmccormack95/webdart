import React from "react";

function ScoreTable(props) {

    return <div>
        {props.player.rounds.map((round, index) => <p key={index}>Round {index + 1}: {round}</p>)}
        <p>Score: {props.player.totalScore}</p>
    </div>
}

export default ScoreTable;