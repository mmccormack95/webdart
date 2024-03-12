import threeOhOnePlayerReducer from "./reducer";

const rootReducer = (state = {}, action) => {
    return {
        players: threeOhOnePlayerReducer(state.players, action)
    }
}

export default rootReducer;