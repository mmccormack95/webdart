import { createSelector } from 'reselect';

const threeOhOneState = state => state.threeOhOne;

export const getWinningPlayer = createSelector(
    threeOhOneState,
    players => players.players.find(player => player.totalScore === 301),
    {
        devModeChecks: {identityFunctionCheck: 'never'}
    }
);

export const getPlayerTurn = createSelector(
    threeOhOneState,
    turn => turn.turn,
);

export const getCurrentRound = createSelector(
    threeOhOneState,
    round => round.round,
);