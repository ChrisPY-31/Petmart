// types.ts

export interface PetmartState {
    // Define aquí las propiedades del estado de Petmart
    articulosFiltrados:string
  }
  
  export interface VerificacionesState {
    // Define aquí las propiedades del estado de Verificaciones
    userLogin:boolean
  }
  
  export interface RootState {
    Petmart: PetmartState;
    Verificar: VerificacionesState;
  }