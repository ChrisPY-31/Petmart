import { createSlice } from '@reduxjs/toolkit';

interface VerificarReducer{
    userLogin:boolean,
}


const initialState:VerificarReducer = {
    userLogin:false,
}

export const VerificacionesSlice = createSlice({
    name: 'Verificaciones',
    initialState,
    reducers: {
        getUserLogin :(state ) =>{
            state.userLogin = !state.userLogin
        },
       
    }
});


// Action creators are generated for each case reducer function
export const { getUserLogin , } = VerificacionesSlice.actions;