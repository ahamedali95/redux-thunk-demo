import deepFreeze from 'deep-freeze';
import {actionTypes} from '../constants';

export const initialState = (() => deepFreeze({
  isLoading: false,
  pokemons: [],
  error: {}
}))();


const index = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEMON_DATA: return { ...state, isLoading: true };
    case actionTypes.POKEMON_DATA_FETCH_SUCCESS: return { ...state, isLoading: false, pokemons: action.payload };
    case actionTypes.POKEMON_DATA_FETCH_FAILURE: return { ...state, isLoading: false, pokemons: [], error: action.payload };
    default: return state;
  }
};

export default index;