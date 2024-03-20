import {createSelector} from "reselect";

const cricketState = state => state.cricket.players;

export const getWinningPlayer = createSelector(
    cricketState,
    players => players.find(player => player.rounds.length === 1),
    {
        devModeChecks: {identityFunctionCheck: 'never'}
    }
);