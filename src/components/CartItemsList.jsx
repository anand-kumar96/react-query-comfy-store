import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import { clearCart } from "../features/cart/cartSlice"


const CartItemsList = () => {
  const cartItems = useSelector((state)=> state.cart.cartItems)
  const dispatch = useDispatch();
  return (
    <>
    {cartItems.map((item)=> <CartItem key={item.cartID} cartItem ={item}/>)}
    <div className="flex justify-between mt-6 flex-wrap gap-6">
    <Link to='/products' className="btn btn-sm btn-secondary btn-block capitalize lg:w-60">continue shopping</Link> 
    <button className="btn btn-sm btn-secondary btn-block capitalize lg:w-60" onClick={()=> dispatch(clearCart())}>clear shopping cart</button> 
    </div>
    </>
  )
}

export default CartItemsList