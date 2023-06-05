import { createSlice } from '@reduxjs/toolkit';

interface FiltersReducer {
    articulosFiltrados:string
}

const initialState:FiltersReducer = {
    articulosFiltrados : ''
}

export const PetmartSlice = createSlice({
    name: 'Petmart',
    initialState,
    reducers: {
        getSearchItem : (state , action) =>{
            state.articulosFiltrados = action.payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { getSearchItem } = PetmartSlice.actions;