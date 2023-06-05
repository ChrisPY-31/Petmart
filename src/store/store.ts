import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { PetmartSlice } from "./reducer";
import { VerificacionesSlice } from "./reducer/Verificaciones";
import { RootState } from "./types";

export const store = configureStore({
  reducer: { 
    Petmart: PetmartSlice.reducer,
    Verificar: VerificacionesSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
