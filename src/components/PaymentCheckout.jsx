import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailed from "./PaymentFailed";

const PaymentCheckout = () => {
  const user = useSelector((state) => state.user.user);
  const { orderTotal } = useSelector((state) => state.cart);
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState(true)

  const handleSubmit = (e) => {};
  return (
    <>
      <SectionTitle text="payment status" />
      <div className="grid gap-6 justify-center mt-10 ">
        {
        success ? <PaymentFailed/>
        : 
        <div className="card w-96 bg-base-100 shadow-xl py-10">
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
          <div className="card w-80">
            <form
              id="payment-form"
              className="card mt-2 flex justify-center"
              onSubmit={handleSubmit}
            >
              <button className="btn btn-primary btn-sm ">Pay</button>
            </form>
          </div>
        </figure>
      </div>}
      </div>
    </>
  );
};

export default PaymentCheckout;

{
  /* <div className="mt-20 flex flex-col gap-y-2 justify-center w-full place-items-center">
    <div className="py-4 bg-base-200 rounded-lg w-96">
    <article className='px-10'>
        <h4 className='text-2xl tracking-wider font-semibold'>Hello, {user.username}</h4>
        <p className='py-2 text-sm '>Your total is : <span className='font-semibold'>{formatPrice(orderTotal)}</span></p>
        <p className='text-sm font-semibold'>Test Card Number: 4242 4242 4242 4242</p>
    </article>
   <form id='payment-form' className='card mt-2 flex justify-center' onSubmit={handleSubmit}>
   <button className='btn btn-primary btn-sm'>Pay</button>
   </form>
   </div>
   </div> */
}
