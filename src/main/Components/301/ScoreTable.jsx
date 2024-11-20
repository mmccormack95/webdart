import React from "react";

function ScoreTable(props) {

    return <div>
        <p>Score: {props.player.totalScore}</p>
        {props.player.rounds.map((round, index) =>
            <p key={index}>
                    Round {index + 1}: {round[0].join(', ')}
            </p>
        )}
    </div>
}

export default ScoreTable;