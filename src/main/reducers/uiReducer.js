import uiState from '../state/uiState';

const uiReducer = (state = uiState, action) => {
    switch (action.type) {
        case 'SET_GAME':
            return {
                ...state,
                gameMode: action.game
            }
        default:
            return state;
    }
}

export default uiReducer;