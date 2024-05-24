import React from 'react'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { Form, redirect } from 'react-router-dom'
import FormSelect from './FormSelect'
import { country_list } from '../store/countries'
import { formatPrice } from '../utils'

export const action = (store) => async({request})=> {
  const formData  = await request.formData();
  const data = Object.fromEntries(formData);
  let {first,last,address,city,postal,country,state} = data;
  const name = `${first} ${last}`;
  address = `${address} ${city} ${postal} ${state} ${country}`
  const{numItemsInCart,orderTotal ,cartItems} = store.getState().cart;
  const body = {
    name,
    address,
    chargeTotal:orderTotal,
    orderTotal:formatPrice(orderTotal),
    cartItems,
    numItemsInCart
  }
  const paymentData = {
    paymentAddress:data,
    body:body
  }
  localStorage.setItem('paymentInfo',JSON.stringify(paymentData));
  return redirect('/payment');
}

const CheckoutForm = () => {
  let first ='';
  let last ='';
  let address ='';
  let city ='';
  let postal ='';
  let state ='';
  let country ='India';
  if(localStorage.getItem('paymentInfo')) {
   const {paymentAddress} = JSON.parse(localStorage.getItem('paymentInfo'));
   first = paymentAddress.first;
   last = paymentAddress.last;
   address = paymentAddress.address;
   city = paymentAddress.city;
   postal = paymentAddress.postal;
   state = paymentAddress.state;
   country = paymentAddress.country;
  }
  return (
    <Form method='POST' className="flex flex-col gap-y-2">
      {/* USER DETAIL */}
      <div className="flex flex-col gap-y-1 sm:flex-row justify-between">
      <FormInput label='* first name' name='first' type='text' size='input-sm' defaultValue={first}  required/>
      <FormInput label='* last name' name='last' type='text' size='input-sm' defaultValue={last} required/>
      </div>

      {/* ADDRESS */}
      <FormInput label='* address' name='address' type='text' size='input-sm' defaultValue={address} required/>
      <div className="flex flex-col gap-y-1 sm:flex-row justify-between">
      <FormInput label='* city' name='city' type='text' size='input-sm' defaultValue={city} />
      <FormInput label='* postal code' name='postal' type='number' size='input-sm' defaultValue={postal} required/>
      </div>

      {/* STATE AND COUNTRY */}
      <div className="flex flex-col gap-y-1 sm:flex-row justify-between">
      <FormSelect list={country_list} label='* country' name='country' defaultValue= {country} size='select-sm'required/>
      <FormInput label='* state' name='state' type='text' size='input-sm' defaultValue={state } required/>
      </div>
      <div className="mt-4">
      <SubmitBtn text='place your order'/>
      </div>
    </Form>
  )
}

export default CheckoutForm