import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const talkToPerla = (state = '', action) => {
    switch (action.type) {
        case types.POST_TO_PERLA:
            return action.message;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    talkToPerla,
    filter,
    routing
});

export default rootReducer;
