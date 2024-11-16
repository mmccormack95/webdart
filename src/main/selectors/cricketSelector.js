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

export const getPlayers = createSelector(
    cricketState,
    players => players.players,
);

export const getWinningPlayer = createSelector(
    cricketState,
    players => {
        const player1 = players.players.find(player => player.name === 'Player 1');
        const player2 = players.players.find(player => player.name === 'Player 2');

        if (player1.tally.every(value => value[1] === 3) && player2.tally.every(value => value[1] === 3)) {
            if (player1.totalScore > player2.totalScore) {
                return player1;
            }
            return player2;
        }
        return false;
    }
);