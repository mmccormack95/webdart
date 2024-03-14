import { createSelector } from 'reselect';

const playersState = state => state.players;

export const getGameMode = createSelector(
    playersState,
    players => players,
);

export const getWinningPlayer = createSelector(
    playersState,
    players => players.threeOhOneplayers.find(player => player.totalScore === 301)
);
