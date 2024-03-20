export const addRound = (name) => ({
    type: 'ADD_ROUND',
    name: name
});

export const handleRoundScoreChange = (roundScore) => ({
    type: 'SET_ROUND_SCORE',
    roundScore: roundScore
});

export const resetRounds = () => ({
    type: 'RESET_ROUNDS'
});

export const setMultiplier = (multiplier) => ({
    type: 'SET_MULTIPLIER',
    multiplier: multiplier
});

export const undoRound = (name) => ({
    type: 'UNDO_ROUND',
    name: name
});
