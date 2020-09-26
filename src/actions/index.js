import { actionTypes } from '../constants';

export const fetchPokemonData = () => {
  return {
    type: actionTypes.FETCH_POKEMON_DATA,
    payload: null
  };
};

export const pokemonDataFetchSuccess = data => {
  return {
    type: actionTypes.POKEMON_DATA_FETCH_SUCCESS,
    payload: data
  };
};

export const pokemonDataFetchFailure = data => {
  return {
    type: actionTypes.POKEMON_DATA_FETCH_FAILURE,
    payload: data
  };
};