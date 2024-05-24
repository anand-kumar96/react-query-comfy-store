import { useSelector } from "react-redux"
import SectionTitle from "../components/SectionTitle"
import { CartItemsList, CartTotals, EmptyCart } from "../components";
import { Link } from "react-router-dom";
import cart from './../assets/cart.svg'

const Cart = () => {
  const user = useSelector((state)=>state.user.user)
  const {numItemsInCart} = useSelector((state)=> state.cart);
  if(numItemsInCart==0){
    return (
     <EmptyCart/>
    )
  }
  return (
    <>
    <SectionTitle text='Shopping Cart'/>
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
       <div className="lg:col-span-8">
        <CartItemsList/>
       </div>
       <div className="lg:col-span-4 lg:pl-4">
        <CartTotals text='review order details'/>
         {user ? 
         <Link to='/checkout' className="btn btn-primary btn-block mt-8 uppercase">Proceed to checkout</Link> 
         : <Link to='/login'state={{ from: "cart" }}  className="btn btn-primary btn-block mt-8 uppercase">Please login</Link>}
       </div>
    </div>
    </>
  )
}

export default Cart