import { useSelector } from "react-redux"
import { formatPrice } from "../utils"


const CartTotals = ({text}) => {
  const {cartTotal,shipping,tax,orderTotal,discount} =  useSelector((state)=>state.cart)
  return (
    <div className="card bg-base-200">
      <h3 className="text-lg capitalize font-semibold pl-4 pt-3">{text}</h3>
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* DISCOUNT */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Discount</span>
          <span className="font-medium">{formatPrice(discount)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className="flex justify-between text-sm pt-2 font-semibold">
          <span>Order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals