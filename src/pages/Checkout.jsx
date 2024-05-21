import React from 'react'
import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm, EmptyCart, SectionTitle } from '../components';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => () =>{
const {user} = store.getState().user;
if(!user) {
  toast.warn('You must be logged in to checkout')
  return redirect('/login')
}
return null;
}
const Checkout = () => {
  const cartTotals = useSelector((state)=> state.cart.cartTotal)
  if(cartTotals==0){
      return (
     <EmptyCart/>
    )
  }
  return (
    <>
    <SectionTitle text='Place your order'/>
    <div className="mt-6 grid gap-8 md:grid-cols-2 items-start">
    <CheckoutForm/>
    <CartTotals text='Your Order'/>
    </div>
    </>
  )
}

export default Checkout