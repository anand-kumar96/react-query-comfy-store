import React from 'react'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { Form, redirect } from 'react-router-dom'
import FormSelect from './FormSelect'
import { country_list } from '../store/countries'
import { customFetch, formatPrice } from '../utils'
import { clearCart } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'

export const action = (store,queryClient) => async({request})=> {
  const formData  = await request.formData();
  const data = Object.fromEntries(formData);
  let {first,last,address,city,postal,country,state} = data;
  const name = `${first} ${last}`;
  address = `${address} ${city} ${postal} ${state} ${country}`
  const user = store.getState().user.user;
  const{numItemsInCart,orderTotal ,cartItems} = store.getState().cart;
  const body = {
    name,
    address,
    chargeTotal:orderTotal,
    orderTotal:formatPrice(orderTotal),
    cartItems,
    numItemsInCart
  }
  const headers = {
    Authorization:`Bearer ${user.jwt}`
  }
try {
  const response = await customFetch.post('/orders',{data:body},{headers:headers});
  // remove query
  queryClient.removeQueries(['orders']);
  store.dispatch(clearCart());
  toast.success('order placed successfullly')
  return redirect('/orders')
} catch(err){
  const errorMessage = err?.response?.data?.error?.message || 'there was an error while placing your order';
  toast.error(errorMessage);
  if(err.response.status===401 || 403) return redirect('/login')
  return null;
}
}
const CheckoutForm = () => {
  return (
    <Form method='POST' className="flex flex-col gap-y-2">
      {/* USER DETAIL */}
      <div className="flex flex-col gap-y-1 sm:flex-row justify-between">
      <FormInput label='* first name' name='first' type='text' size='input-sm' required/>
      <FormInput label='* last name' name='last' type='text' size='input-sm'required/>
      </div>

      {/* ADDRESS */}
      <FormInput label='* address' name='address' type='text' size='input-sm'required/>
      <div className="flex flex-col gap-y-1 sm:flex-row justify-between">
      <FormInput label='* city' name='city' type='text' size='input-sm'/>
      <FormInput label='* postal code' name='postal' type='number' size='input-sm'required/>
      </div>

      {/* STATE AND COUNTRY */}
      <div className="flex flex-col gap-y-1 sm:flex-row justify-between">
      <FormSelect list={country_list} label='* country' name='country' defaultValue='India' size='select-sm'required/>
      <FormInput label='* state' name='state' type='text' size='input-sm'required/>
      </div>
      <div className="mt-4">
      <SubmitBtn text='place your order'/>
      </div>
    </Form>
  )
}

export default CheckoutForm