import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from "./util/api_util"
import * as Actions from "./actions/pokemon_actions"

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});


window.fetchAllPokemon = ApiUtil.fetchAllPokemon;
window.receiveAllPokemon = Actions.receiveAllPokemon;

