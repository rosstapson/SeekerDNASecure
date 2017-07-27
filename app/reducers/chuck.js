import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const randomQuote = createReducer({}, {
    [types.SET_RANDOM_QUOTE](state, action) {
        return action.quote;
    }
});