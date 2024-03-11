
import { configureStore } from '@reduxjs/toolkit';
import { sliceNameSlice } from './reducers'; // Importa el slice que has creado

const store = configureStore({
  reducer: sliceNameSlice.reducer, // Pasa el slice como el reducer al configureStore
  // Aquí puedes agregar opciones adicionales como middleware, devtools, etc.
});

export default store;