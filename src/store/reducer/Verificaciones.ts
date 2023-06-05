import { createSlice } from '@reduxjs/toolkit';

interface VerificarReducer{
    userLogin:boolean,
    userLogOut:boolean
}


const initialState:VerificarReducer = {
    userLogin:false,
    userLogOut:false
}

export const VerificacionesSlice = createSlice({
    name: 'Verificaciones',
    initialState,
    reducers: {
        getUserLogin :(state ) =>{
            state.userLogin = true
        },
        getUserLogOut : (state) =>{
            state.userLogOut = true
        }
    }
});


// Action creators are generated for each case reducer function
export const { getUserLogin , getUserLogOut} = VerificacionesSlice.actions;