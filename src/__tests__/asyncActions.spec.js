// mock axios http client to avoid calling the real service
import axios from '../__mocks__/axios';
// mock redux store and provide the necessary middlewares
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {fetchPokemonData, pokemonDataFetchSuccess, pokemonDataFetchFailure} from '../actions';
import {initialState as appState} from '../reducers';
import {fetchPokemons} from "../actions/asyncActions";

describe('async actions', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    ...appState
  });
  const findAction = (actions, myAction) => actions.find(action => action.type === myAction.type);
  // construct appropriate promises to fulfill different use cases
  const success = data => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data });
    });
  };
  const failure = data => {
    axios.get.mockImplementationOnce(() => {
      return Promise.reject(data);
    });
  };

  // reset mock implementation after each test case to eliminate side effects
  afterEach(() => {
    axios.get.mockReset();
  });

  // Each test case performs the following steps:
  // provides appropriate data to the mock axios object based on the success or failure scenario that will be resolved in your code under test
  // calls the async action creator - fetchPokemons using the dispatch() of the store that will return the thunk function that the middleware can process
  // gets all the dispatched actions using the getActions() of the store and among those, queries and finds the action we expect the thunk to dispatch
  // asserts on the action
  describe('fetchPokemons()', () => {
    // test to verify initial dispatched actions, i.e., fetchPokemonData
    it('should dispatch appropriate initial actions', async () => {
      failure({});
      await store.dispatch(fetchPokemons());

      const action = findAction(store.getActions(), fetchPokemonData());
      expect(action).toEqual(fetchPokemonData());
    });

    // test to verify actions during the happy path, i.e., pokemonDataFetchSuccess
    it('should dispatch appropriate action if the API call is successful', async () => {
      const data = { results: ['poke'] };
      success(data);
      await store.dispatch(fetchPokemons());

      const action = findAction(store.getActions(), pokemonDataFetchSuccess());
      expect(action).toEqual(pokemonDataFetchSuccess(data.results));
    });

    // test to verify actions during the sad path, i.e., pokemonDataFetchFailure
    it('should dispatch appropriate action if the API call is unsuccessful', async () => {
      const data = {};
      failure(data);
      await store.dispatch(fetchPokemons());

      const action = findAction(store.getActions(), pokemonDataFetchFailure());
      expect(action).toEqual(pokemonDataFetchFailure(data));
    });
  });
});