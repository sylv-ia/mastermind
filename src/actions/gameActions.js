import {
    SET_ANSWER, INCREMENT_POSX, DECREMENT_POSX, INCREMENT_POSY,
    DECREMENT_POSY, SET_COLOR, PRESS_CHECK, CLEAR_GAME,
    SET_POS, SET_LVL, MORE_ATTEMPTS
} from './types';

export const setAnswer = (receivedNumber) => {
    return {
        type: SET_ANSWER,
        payload: receivedNumber,
    }
}

export const incrementPosX = () => {
    return {
        type: INCREMENT_POSX,
    }
}

export const decrementPosX = () => {
    return {
        type: DECREMENT_POSX,
    }
}

export const incrementPosY = () => {
    return {
        type: INCREMENT_POSY,
    }
}

export const decrementPosY = () => {
    return {
        type: DECREMENT_POSY,
    }
}

export const setPos = (x, y) => {
    return {
        type: SET_POS,
        payload: { x, y }
    }
}

export const setColor = (color) => {
    return {
        type: SET_COLOR,
        payload: color
    }
}

export const pressCheck = (arr) => {
    return {
        type: PRESS_CHECK,
        payload: arr,
    }
}

export const clearGame = () => ({ type: CLEAR_GAME })

export const setLvl = (lvl, game) => ({ type: SET_LVL, payload: { lvl, game }})

export const setBoard = (n, board) => ({ type: SET_LVL, payload: { n, board } })

export const moreAttempts = () => ({ type: MORE_ATTEMPTS })