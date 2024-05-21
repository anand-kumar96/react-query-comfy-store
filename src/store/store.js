import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import userReducer from '../features/user/userSlice'
import toggleReducer from '../features/toggle/toggleSlice'

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        toggle:toggleReducer
    }
})