import { createSelector } from 'reselect';

const threeOhOneState = state => state.threeOhOne.players;

export const getWinningPlayer = createSelector(
    threeOhOneState,
    players => players.find(player => player.totalScore === 301),
    {
        devModeChecks: {identityFunctionCheck: 'never'}
    }
);
