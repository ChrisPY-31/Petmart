import { configureStore } from "@reduxjs/toolkit";
import { PetmartSlice } from "./reducer";

export const store = configureStore({
    reducer: PetmartSlice.reducer,
  })