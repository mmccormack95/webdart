import {createSelector} from "reselect";

const cricketState = state => state.cricket;

export const getTally1 = createSelector(
    cricketState,
    players => players.players.find(player => player.name === 'Player 1').tally,
);

export const getTally2 = createSelector(
    cricketState,
    players => players.players.find(player => player.name === 'Player 2').tally,
);

export const getRounds = createSelector(
    cricketState,
    rounds => rounds.rounds,
);