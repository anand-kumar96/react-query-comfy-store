import React from 'react'
import { Link } from 'react-router-dom';
import cart from './../assets/cart.svg'
const EmptyCart = () => {
  return (
    <main className='grid max-h-[100vh] justify-center place-content-start'>
    <div className="text-center">
    <img src={cart} className='h-72 w-auto object-fill sm:h-80'/>
    <h4 className='text-center font-bold text-2xl mt-2 md:pt-10 md:text-4xl text-secondary '>Your cart is empty</h4>
    <Link to={'/products'} className='btn btn-primary mt-8 font-semibold uppercase' >Please fill some</Link>
    </div>
  </main>
  )
}

export default EmptyCart