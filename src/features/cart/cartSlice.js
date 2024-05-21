import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems:[],
  numItemsInCart:0,
  cartTotal:0,
  shipping:100,
  tax:0,
  orderTotal:0,
  discount:0
}
const getCartFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('cart')) || initialState;
}
const cartSlice = createSlice({
    name:'cart',
    initialState:getCartFromLocalStorage(),
    reducers:{
        addItem:(state,action)=> {
            const {product} = action.payload;
            const item = state.cartItems.find((i)=> i.cartID === product.cartID);
            if(item){
                item.amount += product.amount
            } else {
                state.cartItems = [...state.cartItems,product] // or state.cartItems.push(product)
            }
            state.numItemsInCart += product.amount;
            state.cartTotal += product.price * product.amount;
            cartSlice.caseReducers.calculateTotals(state);// calling reducer in other reducer
            toast.success(`${product.title} is added to cart`);
        },
        removeItem:(state,action)=> {
            const {cartID} = action.payload;
            const product = state.cartItems.find((i)=> i.cartID === cartID);
            state.cartItems = state.cartItems.filter((i)=> i.cartID !== cartID);
            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.error(`${product.title} is removed from cart`);
        },
        editItem:(state,action)=> {
            const {cartID,amount} = action.payload;
            const product = state.cartItems.find((i)=> i.cartID=== cartID);
            state.numItemsInCart += amount - product.amount;
            state.cartTotal += (amount-product.amount)* product.price;
            product.amount = amount;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success('cart is updated');
        },
        clearCart:()=>{
            localStorage.setItem('cart',JSON.stringify(initialState));
            return initialState;
        },
        calculateTotals:(state)=> {
            if(state.discount< 1000){
            state.discount = 0.005 * state.cartTotal;
            }
            state.tax = 0.05 * state.cartTotal;
            state.orderTotal = state.cartTotal+state.shipping+state.tax-state.discount;
            localStorage.setItem('cart',JSON.stringify(state))
        }
    }
})

export const {addItem,removeItem,editItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

/* since we have to do this calculation in addItem,removeItem,editItem then why not why create another reducer and call it
but how can we dispatch it in other reducer => we can do using caseReducer 
we can also do without using extra reducer but for knowledge lets do using caseReducer to updateTax,orderTotal and update localStorage
    state.tax = 0.1 * state.cartTotal;
    state.orderTotal = state.cartTotal+state.shipping+state.tax;
    localStorage.setItem('cart',JSON.stringify(state))
*/