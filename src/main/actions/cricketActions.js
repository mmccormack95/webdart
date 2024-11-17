export const tally1Increase = (button) => ({
    type: 'TALLY1_ADD',
    button: button
});

export const tally2Increase = (button) => ({
    type: 'TALLY2_ADD',
    button: button
});

export const tally1Score = (button) => ({
    type: 'TALLY1_SCORE',
    button: button
});

export const tally2Score = (button) => ({
    type: 'TALLY2_SCORE',
    button: button
});

export const resetRounds = () => ({
    type: 'RESET_ROUNDS'
});
