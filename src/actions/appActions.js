import { SET_LVL_PROGRESS, SAVE_GAME, DISABLE_HELP_ARROW, SET_PAGE_INDEX, SET_SET } from './types';

export const setLvlProgress = (lvl, status) => ({
    type: SET_LVL_PROGRESS,
    payload: { lvl, status }
})

export const saveGame = (game) => ({
    type: SAVE_GAME,
    payload: game,
})

export const disableHelpArrow = () => ({ type: DISABLE_HELP_ARROW })

export const setPageIndex = (type, index) => ({
    type: SET_PAGE_INDEX,
    payload: {type, index},
})

export const setSet = (set) => ({
    type: SET_SET,
    payload: set,
})
