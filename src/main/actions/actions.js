export const addRound = (name, roundScore) => ({
    type: 'ADD_ROUND',
    name: name,
    roundScore: roundScore
});

export const handleRoundScoreChange = (name, roundScore) => ({
    type: 'SET_ROUND_SCORE',
    name: name,
    roundScore: roundScore
});

export const resetRounds = (name) => ({
    type: 'RESET_ROUNDS',
    name: name
});

export const setMultiplier = (name, multiplier) => ({
    type: 'SET_MULTIPLIER',
    name: name,
    multiplier: multiplier
});

export const setGame = (game) => ({
    type: 'SET_GAME',
    game: game
});
