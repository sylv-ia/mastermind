import { combineReducers } from 'redux';

import GameReducer from './gameReducer';
import AppReducer from './appReducer';

export default combineReducers({
    game: GameReducer,
    app: AppReducer,
    
})