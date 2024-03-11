import { createSlice } from '@reduxjs/toolkit';

const initialState = {
products: [],
};

export const sliceNameSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
getProducts:(state, action)=>{
    state.products = action.payload
}
  },
});

export const { getProducts} = sliceNameSlice;

export default sliceNameSlice.reducer