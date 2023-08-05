const { createSlice } = require('@reduxjs/toolkit');
const initialState = []

const cartSlice = createSlice({
name : "cart",
initialState : [],
reducers:{
    addToCart(state,action){

      // Becasue of the createSlice tag, we can mutate the state directly
        state.push(action.payload)
        return state
    },
    removeToCart(state,action){
      console.log(action.payload)
     return state.filter((item)=> item.id !== action.payload)
    },
}


})


export default cartSlice.reducer ;
export const {addToCart,removeToCart} =  cartSlice.actions;