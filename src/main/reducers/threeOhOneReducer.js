import threeOhOneState from "../state/threeOhOneState";

const threeOhOneReducer = (state = threeOhOneState, action) => {
    switch (action.type) {
        case 'ADD_ROUND':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === action.name) {
                        if(state.round.length < 3) {
                            state.round.push(state.roundScore * state.multiplier);
                        }
                        if(state.round.length === 3) {
                            const roundtotal = state.round.reduce((totalScore, score) => parseInt(totalScore) + parseInt(score));
                            const total = parseInt(player.totalScore) + roundtotal;
                            if (total > 301) {
                                player.rounds.push([state.round, total]);
                                player.totalScore = 301 - (state.roundScore * state.multiplier);
                            }
                            else {
                                player.totalScore = total;
                                player.rounds.push([state.round, total]);
                            }
                        }
                    }
                    return player;
                }),
                turn: state.round.length === 3 ? (state.turn === "Player 1" ? "Player 2" : "Player 1") : state.turn,
                round: state.round.length === 3 ? [] : state.round,
                roundScore: 0,
            }
        case 'SET_ROUND_SCORE':
            return {
                ...state,
                roundScore: action.roundScore
            }
        case 'UNDO_ROUND':
            const isMiddleOfRound = state.round.length > 0;

            if(isMiddleOfRound) {
                state.round.pop();
                return {
                    ...state,
                    round: state.round.length === 1 ? state.round : [],
                    roundScore: 0,
                }
            }

            const turnAvailable = !(state.players.find(player=>player.name === "Player 1").rounds.length === 0);

            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name !== action.name) {
                        if(player.rounds.length > 0) {
                            player.totalScore = player.rounds[player.rounds.length - 1][1] -
                                player.rounds[player.rounds.length - 1][0]
                                    .reduce((totalScore, score) => parseInt(totalScore) + parseInt(score));
                            player.rounds.pop();
                        }
                    }
                    return player;
                }),
                turn: turnAvailable ? (state.turn === "Player 1" ? "Player 2" : "Player 1") : state.turn,
                roundScore: 0,
            }
        case 'RESET_ROUNDS':
            return {
                ...state,
                players: state.players.map(player => {
                    player.rounds = [];
                    player.totalScore = 0;
                    return player;
                }),
                turn: "Player 1",
                roundScore: 0,
            }
        case 'SET_MULTIPLIER':
            return {
                ...state,
                multiplier: action.multiplier
            }
        default:
            return state;
    }
}

export default threeOhOneReducer;