import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    isSearch: false,
    isFetching: false
  },
  reducers: {
    add: (state, action) => {
      state.pokemons = [...state.pokemons, action.payload];
    },
    search: (state, action) => {
      state.isSearch = action.payload;
    },
    fetchPokemon: (state, action) => {
      state.isFetching = action.payload;
    },
    clean: (state) => {
      state.pokemons = [];
    }
  }
});

export const { add, clean, search, fetchPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;