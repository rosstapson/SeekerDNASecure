import * as types from './types'
import Api from '../lib/api'

export function fetchRandomQuote() {
  return (dispatch, getState) => {
    
    return Api.getRandomQuote().then(result => {
      dispatch(setRandomQuote({quote: result}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setRandomQuote({ quote }) {
  return {
    type: types.SET_RANDOM_QUOTE,
    quote,
  }
}
