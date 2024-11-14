import cricketState from '../state/cricketState';

const cricketReducer = (state = cricketState, action) => {
    switch (action.type) {
        case 'TALLY1_ADD':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === 'Player 1') {
                        player.tally.map(tally => {
                            if (tally[0] === action.button) {
                                if (tally[1]+1 <= 3) {
                                    tally[1] += 1;
                                }
                            }
                            return tally;
                        });
                    }
                    return player;
                }),
            }
        case 'TALLY2_ADD':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === 'Player 2') {
                        player.tally.map(tally => {
                            if (tally[0] === action.button) {
                                if (tally[1]+1 <= 3) {
                                    tally[1] += 1;
                                }
                            }
                            return tally;
                        });
                    }
                    return player;
                }),
            }
        case 'TALLY1_SCORE':

            const player2Tally = state.players.find(player => player.name === 'Player 2').tally.find(tally => tally[0] === action.button)[1];

            if (player2Tally === 3) {
                return state;
            }

            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === 'Player 1') {
                        player.tally.map(tally => {
                            if (tally[0] === action.button) {
                                if (tally[1] === 3) {
                                    if (action.button === 'B') {
                                        player.totalScore += 25;
                                    } else {
                                        player.totalScore += parseInt(action.button);
                                    }
                                }
                            }
                            return tally;
                        });
                    }
                    return player;
                }),
            }
        case 'TALLY2_SCORE':

            const player1Tally = state.players.find(player => player.name === 'Player 1').tally.find(tally => tally[0] === action.button)[1];

            if (player1Tally === 3) {
                return state;
            }

            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === 'Player 2') {
                        player.tally.map(tally => {
                            if (tally[0] === action.button) {
                                if (tally[1] === 3) {
                                    player.totalScore += parseInt(action.button);
                                }
                            }
                            return tally;
                        });
                    }
                    return player;
                }),
            }
        default:
            return state;
    }
}

export default cricketReducer;