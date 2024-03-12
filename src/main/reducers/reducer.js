import players from "../state/players";

const threeOhOnePlayerReducer = (state = players, action) => {
    switch (action.type) {
        case 'ADD_ROUND':
            return {
                ...state,
                threeOhOneplayers: state.threeOhOneplayers.map(player => {
                    if (player.name === action.name) {
                        player.rounds.push(player.roundScore * player.multiplier);
                        player.totalScore = parseInt(player.totalScore) + (parseInt(player.roundScore) * player.multiplier);
                    }
                    return player;
                })
            }
        case 'SET_ROUND_SCORE':
            return {
                ...state,
                threeOhOneplayers: state.threeOhOneplayers.map(player => {
                    if (player.name === action.name) {
                        player.roundScore = action.roundScore;
                    }
                    return player;
                })
            }
        case 'RESET_ROUNDS':
            return {
                ...state,
                threeOhOneplayers: state.threeOhOneplayers.map(player => {
                    if (player.name === action.name) {
                        player.rounds = [];
                        player.totalScore = 0;
                        player.roundScore = 0;
                    }
                    return player;
                })
            }
        case 'SET_MULTIPLIER':
            return {
                ...state,
                threeOhOneplayers: state.threeOhOneplayers.map(player => {
                    if (player.name === action.name) {
                        player.multiplier = action.multiplier;
                    }
                    return player;
                })
            }
        case 'SET_GAME':
            return {
                ...state,
                gameMode: action.game
            }
        default:
            return state;
    }
}

export default threeOhOnePlayerReducer;