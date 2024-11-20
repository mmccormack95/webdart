import {createSelector} from 'reselect';

const threeOhOneState = state => state.threeOhOne;

export const getRoundLength = createSelector(
    threeOhOneState,
    round => round.round.length,
);

export const getWinningPlayer = createSelector(
    threeOhOneState,
    state => state.players.find(player =>
        player.totalScore === 301 && state.round.length === 0),
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

export const getPlayers = createSelector(
    threeOhOneState,
    players => players.players,
)

export const getMultiplier = createSelector(
    threeOhOneState,
    multiplier => multiplier.multiplier,
)