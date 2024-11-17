import React from "react";

const NewGameButton = (props) => {
    return (
        <div className="newGameButtonGrid">
            <button className="newGameButton" onClick={props.resetRoundsAction}>
                New Game
            </button>
        </div>
    )
}

export default NewGameButton;