import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 10

}

export const PetmartSlice = createSlice({
    name: 'Petmart',
    initialState,
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = PetmartSlice.actions;