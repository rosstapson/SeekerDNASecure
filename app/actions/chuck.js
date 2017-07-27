import * as types from './types'
import Api from '../lib/api'

export function fetchRandomQuote() {
  return (dispatch, getState) => {
  
     return Api.getRandomQuote().then(result => {

       dispatch(setRandomQuote({quote: result.value.joke}));
     }).catch( (ex) => {
       console.log(ex);
     });
  }
}



export function getZomg() {
  return (dispatch, getState) => {
    return dispatch(setZomg({zomg: "myNewZomg"}));
  }
}
export function setRandomQuote({ quote }) {
  return {
    type: types.SET_RANDOM_QUOTE,
    quote,
  }
}

export function setZomg( {zomg}) {
  return {
    type: types.SET_ZOMG,
    zomg
  }
}