import { useDispatch } from "react-redux";
import { formatPrice, generatedAmountOption } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const{cartID, title, price, image,amount,company,productColor} = cartItem;

  const removeItemFromCart = () =>{
    dispatch(removeItem({cartID}))
  }
  const updateAmount = (e) =>{
    dispatch(editItem({cartID,amount:parseInt(e.target.value)}))
  }
  return (
    <article className="mb-4 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      {/* IMAGE */}
      <img src={image} alt={title} className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover" />
      {/* INFO */}
      <div className="ml-2 sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="font-medium capitalize">{title}</h3>
        <h3 className="text-sm capitalize text-neutral-content pt-1">{company}</h3>
        {/* COLOR */}
        <p className="capitalize text-sm flex items-center gap-x-2 mt-2">
         Color: <span className="badge badge-sm" style={{backgroundColor:productColor}}></span>
        </p>
      </div>
        {/* AMOUNT REMOVE BUTTON */}
      <div className="ml-2 sm:ml-24">
        <h3 className=" text-sm capitalize">Amount</h3>
        {/* AMOUNT */}
        <select className="select select-bordered select-secondary select-xs mt-2" value={amount} onChange={updateAmount}>
          {generatedAmountOption(10)}
        </select>
        {/* REMOVE */}
        <button className="text-sm link link-primary link-hover mt-2 block" onClick={removeItemFromCart}>remove</button>
      </div>
        {/* ORDER TOTAL*/}
      <p className="font-medium sm:ml-auto mr-2">{formatPrice(price)}</p>
    </article>
  )
}

export default CartItem