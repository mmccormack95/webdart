import { createSelector } from 'reselect';

const playersState = state => state.players;

export const getGameMode = createSelector(
    playersState,
    players => players,
);
