import axios from 'axios';
import {fetchPokemonData, pokemonDataFetchFailure, pokemonDataFetchSuccess} from './index';

/**
 * Known as the "async action creator" that will be called inside our component. Instead of returning regular action objects, it returns a function.
 *
 * @function fetchPokemons
 * @return {function} thunk
 */

export const fetchPokemons = () => {
  /**
   * Delay dispatch of actions until the async operation to fetch pokemons is complete
   *
   * @async
   * @function thunk
   * @param {function} dispatch - Redux store function used to dispatch an action
   * @param {function} getState - Redux store function used to retrieve the current state tree of the application
   * @return {undefined}
   */

  const thunk = async (dispatch, getState) => {
    dispatch(fetchPokemonData());

    try {
      const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon');
      dispatch(pokemonDataFetchSuccess(pokemons.data.results));
    } catch (e) {
      dispatch(pokemonDataFetchFailure(e));
    }
  };

  return thunk;
};
