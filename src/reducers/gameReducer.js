import {
    SET_ANSWER, INCREMENT_POSX, DECREMENT_POSX, INCREMENT_POSY,
    DECREMENT_POSY, SET_COLOR, PRESS_CHECK, CLEAR_GAME, SET_POS,
    SET_LVL, MORE_ATTEMPTS
} from '../actions/types';

import { genLvl } from '../constants/consts';

const initialState = {
    posX: 0,
    posY: 0,
    ans: [2, 3, 5, 5],
    board: [new Array(4).fill('')],
    indicators: [],
    width: 3,
    lvl: null,
    attempts: 9,
    tries: 0,
    won: false,
}

export default (state = initialState, action) => {
    let { posX, posY, ans, board, width } = state;

    switch (action.type) {
        case SET_ANSWER:
            return Object.assign({}, state, {
                ans: action.payload
            })
        case CLEAR_GAME:
            return initialState;

        case INCREMENT_POSX:
            return posX + 1 > width ? state :
                Object.assign({}, state, {
                    posX: posX + 1
                })
        case DECREMENT_POSX:
            return posX - 1 < 0 ? state :
                Object.assign({}, state, {
                    posX: posX - 1
                })
        case INCREMENT_POSY:
            return Object.assign({}, state, {
                posY: posY + 1
            })
        case DECREMENT_POSY:
            return Object.assign({}, state, {
                posY: posY - 1
            })
        case SET_POS:
            return Object.assign({}, state, {
                posX: action.payload.x,
                posY: action.payload.y,
            })

        case SET_COLOR:
            let newBoard = JSON.parse(JSON.stringify(board));
            newBoard[posY][posX] = action.payload;
            return {
                ...state,
                board: newBoard,
                posX: (posX + 1 > width) ? posX : posX + 1,
            };

        case PRESS_CHECK:
            state.indicators.push(action.payload);
            state.tries++;
            state.attempts--;
            if (action.payload[0] != state.width + 1) {
                if (state.attempts != 0) {
                    state.board.push(new Array(width + 1).fill(''));
                    state.posY = posY + 1;
                    state.posX = 0;
                } else {
                    //console.log('lose');
                }
            } else {
                state.won = true;
                state.posX = -1;
                state.posY = -1;
            }

            return Object.assign({}, state, state);

        case SET_LVL:
            const { lvl, game } = action.payload;
            if (game != undefined) return game;

            const ans = genLvl(lvl);
            //console.log(ans);
            return Object.assign({}, state, {
                lvl: lvl,
                ans: ans,
                posX: 0,
                posY: 0,
                board: [new Array(4).fill('')],
                indicators: [],
                width: ans.length - 1,
                attempts: 9,
                tries: 0,
                won: false,
            });

        case MORE_ATTEMPTS:
            state.board.push(new Array(width + 1).fill(''))
            state.posY++;
            return Object.assign({}, state, {
                board: state.board,
                attempts: 6,
                posX: 0,
                posY: state.posY,
            })



        default:
            return state;
    }
}