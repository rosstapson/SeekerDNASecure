import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const randomQuote = createReducer({}, {
    [types.SET_RANDOM_QUOTE](state, action) {

        return action.quote;
    }
});

export const getZomg = createReducer({}, {
    [types.GET_ZOMG](state, action) {
        return { zomg: "some sort of ZOMG"};
    },
    [types.SET_ZOMG](state, action) {
        return { zomg: action.zomg};
    },
});

