import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart(state) { 
     state.value ++;
    },
   
  },
});

export const { addToCart} = counterSlice.actions;
export default counterSlice.reducer;
