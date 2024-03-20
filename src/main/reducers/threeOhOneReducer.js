import threeOhOneState from "../state/threeOhOneState";

const threeOhOneReducer = (state = threeOhOneState, action) => {
    switch (action.type) {
        case 'ADD_ROUND':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === action.name) {
                        const total = parseInt(player.totalScore) + (parseInt(player.roundScore) * player.multiplier);
                        if (total > 301) {
                            player.rounds.push([(player.roundScore * player.multiplier), total]);
                            player.totalScore = 301 - (player.roundScore * player.multiplier);
                        }
                        else {

                            player.totalScore = total;
                            player.rounds.push([(player.roundScore * player.multiplier), total]);
                        }
                    }
                    return player;
                })
            }
        case 'SET_ROUND_SCORE':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === action.name) {
                        player.roundScore = action.roundScore;
                    }
                    return player;
                })
            }
        case 'UNDO_ROUND':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === action.name) {
                        if(player.rounds.length > 0) {
                            player.totalScore = player.rounds[player.rounds.length - 1][1] - player.rounds[player.rounds.length - 1][0]  ;
                            player.rounds.pop();
                        }
                    }
                    return player;
                })
            }
        case 'RESET_ROUNDS':
            return {
                ...state,
                players: state.players.map(player => {
                    player.rounds = [];
                    player.totalScore = 0;
                    return player;
                })
            }
        case 'SET_MULTIPLIER':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === action.name) {
                        player.multiplier = action.multiplier;
                    }
                    return player;
                })
            }
        default:
            return state;
    }
}

export default threeOhOneReducer;