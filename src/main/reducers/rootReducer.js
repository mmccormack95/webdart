import playerReducer from "./reducer";

const rootReducer = (state = {}, action) => {
    return {
        players: playerReducer(state.players, action)
    }
}

export default rootReducer;