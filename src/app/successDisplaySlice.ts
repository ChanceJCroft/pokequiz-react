import { createSlice } from "@reduxjs/toolkit";


export const successSlice = createSlice({
    name: 'success',
    initialState: {
        value: false,
    },
    reducers: {
        onSuccess: (state) => {
            state.value = true;
        },

        onFailure: (state) => {
            state.value = false
        }
    }
})

export const {onSuccess, onFailure} = successSlice.actions;

export default successSlice.reducer;