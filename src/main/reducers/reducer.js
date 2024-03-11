import players from "../state/players";

const playerReducer = (state = players, action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [...state, action.player];
        case 'REMOVE_PLAYER':
            return state.filter((player, index) => index !== action.index);
        default:
            return state;
    }
}

export default playerReducer;