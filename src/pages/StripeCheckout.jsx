import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import {customFetch, formatPrice } from "../utils";
import PaymentSuccess from "../components/PaymentSuccess";
import PaymentFailed from "../components/PaymentFailed";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../features/cart/cartSlice";


// LOADER 
export const loader = (store) => () =>{
  const {user} = store.getState().user;
  const {numItemsInCart} = store.getState().cart;
  if(!user) {
    toast.warn('You must be logged in to make a payment')
    return redirect('/login')
  }
  if(numItemsInCart == 0) {
    toast.warn('please add some items in cart to make payment')
    return redirect('/products')
  }
  if(localStorage.getItem('paymentInfo') == null) {
    toast.warn('please provide devery addresss..')
    return redirect('/checkout')
  }
  return null;
  }
const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

// COMPONENT FORM
const PaymentCheckoutForm = () => {
  const {paymentAddress} = JSON.parse(localStorage.getItem('paymentInfo'));
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);
  const {
    cartItems,
    cartTotal,
    shipping,
    tax,
    orderTotal,
    discount,
  } = cart;

  // STRIPE STUFF
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [failed, setFailed] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const queryClient = useQueryClient();
  const dispatch = useDispatch()

  // CREATE PAYMENT INTENT
  const createPaymentIntent = async () => {
    try {
      const {data} = await axios.post('/.netlify/functions/create-payment-intent',JSON.stringify({cartItems,cartTotal,shipping,tax,discount,paymentAddress,}))
      setClientSecret(data.clientSecret)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  },[]);

  const handleChange = async(event) => {
    setDisabled(event.empty);
    setError(event?.error?event.error.message : '')
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    })
    if(payload.error){
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false)
      setFailed(true)
    } else {
      setError(null);
      setProcessing(false);
      setDisabled(false)
      const data = await orderPlaced();
      setSucceeded(true)
    }
  };

  // PLACE ORDER
const orderPlaced = async () => {
  const headers = {
    Authorization:`Bearer ${user.jwt}`
  }
  const {body} = JSON.parse(localStorage.getItem('paymentInfo'))
  console.log(body);
try {
  const response = await customFetch.post('/orders',{data:body},{headers:headers});

  // REMOVE QUERY
  queryClient.removeQueries(['orders']);
  dispatch(clearCart());
  toast.success('order placed successfullly');
  return response.data;
} catch(err){
  console.log(err);
  const errorMessage = err?.response?.data?.error?.message || 'there was an error while placing your order';
  toast.error(errorMessage);
  if(err.response.status===401 || 403){
    setError(errorMessage);
    setFailed(true)
  }
}
}
  // CARD STYLE
  const {theme} = useSelector((state)=>state.toggle)
  const cardStyle = {
    style: {
      base: {
        iconColor: theme === 'dim' ? '#A7FF91' : '#1763CD',
        color: theme === 'dim' ? '#FBFFFA' : '#0069ff',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: theme === 'dim' ? '#93DF80' : '#121314',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <>
      <SectionTitle text="payment status" />
      <div className="grid gap-6 justify-center mt-10">
        { failed ? <PaymentFailed err={error}/> :succeeded ? <PaymentSuccess/> : 
          <div className="card min-w-96 bg-base-100 shadow-xl p-10">
            <div className="card-body">
              <h2 className="card-title">Hello, {user.username}</h2>
              <p className="text-sm ">
                Your total is :{" "}
                <span className="font-semibold">{formatPrice(orderTotal)}</span>
              </p>
              <p className="text-sm font-semibold">
                Test Card Number: 4242 4242 4242 4242
              </p>
            </div>
            <figure>
              <div className="card w-96 flex justify-center place-content-center px-4">
                <form
                  id="payment-form"
                  className="card mt-2"
                  onSubmit={handleSubmit}
                >
                  <CardElement id="card-element" onChange={handleChange} options={cardStyle} />
                  <button className="btn btn-primary btn-sm mt-4" disabled = {processing || disabled || succeeded}>
                    {processing ?  <span className="loading loading-spinner"></span>:'Pay now'}
                  </button>
                  {error && (
                      <div className='text-red-500 pt-2 text-sm' role='alert'>
                        {error}
                      </div>)}
                </form>
              </div>
            </figure>
          </div>
            }
      </div>
    </>
  );
};

// COMPONENT
const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;
