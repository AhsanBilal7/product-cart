import cartSlice from "./cartSlice"
import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./productSlice"

 const store = configureStore({
    reducer: {
        cart: cartSlice , 
        product: productSlice
    }
})

export default store