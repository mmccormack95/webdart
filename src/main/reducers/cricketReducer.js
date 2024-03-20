import cricketState from '../state/cricketState';

const cricketReducer = (state = cricketState, action) => {
    switch (action.type) {
        case 'ADD_ROUND':
            return {
                ...state,
                players: state.players.map(player => {
                    if (player.name === action.name) {
                        player.rounds.push(player.roundScore);
                    }
                    return player;
                })
            }
        default:
            return state;
    }
}

export default cricketReducer;