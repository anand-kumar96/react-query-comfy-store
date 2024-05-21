import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const navigate = useNavigate();
  const {user} = useSelector((state)=> state.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    // remove query
    queryClient.removeQueries();
    navigate('/')
  }
  return (
    <header className = 'bg-neutral py-2 text-neutral-content' >
        <div className="align-element flex justify-end">
           { /*USER */}
           { /*LINK */}
           {user ? 
           <div className="flex gap-x-2 sm:gap-x-4 justify-center items-center">
           <p className='text-xs sm:text-sm capitalize'>Hello, {user.username}</p>
           <button onClick={handleLogout} className='btn btn-xs btn-outline btn-primary uppercase'>logout</button>
           </div>
           : 
           <div className="flex gap-x-6 justify-center items-center">
           <Link to='/login' className = 'link link-hover text-xs sm:text-sm hover:text-primary'>Sign in / Guest</Link>
           <Link to='/register' className = 'link link-hover text-xs sm:text-sm hover:text-primary'>Create Account</Link>
           </div>
           }
           
        </div>
    </header>
  )
}

export default Header