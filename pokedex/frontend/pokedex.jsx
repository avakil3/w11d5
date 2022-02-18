import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as ApiUtil from "./util/api_util"
import * as Actions from "./actions/pokemon_actions"

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

window.fetchAllPokemon = ApiUtil.fetchAllPokemon;
window.receiveAllPokemon = Actions.receiveAllPokemon;

