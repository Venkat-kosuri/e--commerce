import { createSlice } from "@reduxjs/toolkit";
import Data from "../components/Data";

const cartSlice = createSlice({
  name: "cart-slice",
  initialState: [],
  reducers: {
    addITemToCart(state, action) {
      const product = Data.find((item) => {
        return item.id === action.payload.cartItem;
      });
      state.push(product);
      console.log(product);
    },
    removefromcart (state,action) {
      const product = Data.find((item) => {
        return item.id === action.payload.cartItem;
      });
      state = state.map((item) => {
        if(item.id !== product.id){
          return item
        }
      } 
      )
      console.log(state)
      return  ([...state])
    
    }

  },
});

export const { addITemToCart,removefromcart } = cartSlice.actions;
export default cartSlice.reducer;
