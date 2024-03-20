import {createSelector} from "reselect";

const uiState = state => state.ui;

export const getGameMode = createSelector(
    uiState,
    gameMode => gameMode,
    {
        devModeChecks: {identityFunctionCheck: 'never'}
    }
);
