import { configureStore } from '@reduxjs/toolkit'
import pokemonSliceReducer from './pokemonSlice'
import successSliceReducer from './successDisplaySlice'

export default configureStore({
  reducer: {
    pokemon: pokemonSliceReducer,
    success: successSliceReducer
  },
})