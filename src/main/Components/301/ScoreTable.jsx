import React from "react";

function ScoreTable(props) {

    return <div>
        {props.player.rounds.map((round, index) =>
            <p key={index}>
                Round {index + 1}: {round[0].join(', ')} Prelim Total: {round[1]}
            </p>
        )}
        <p>Score: {props.player.totalScore}</p>
    </div>
}

export default ScoreTable;