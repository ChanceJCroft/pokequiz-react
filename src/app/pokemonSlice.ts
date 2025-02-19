import { createSlice } from "@reduxjs/toolkit";


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        value: null,
    },
    reducers: {
        updatePokemon: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {updatePokemon} = pokemonSlice.actions;

export default pokemonSlice.reducer;