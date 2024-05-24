import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
const PaymentFailed = ({err}) => {
  const navigate = useNavigate();
  setTimeout(()=>{
  navigate('/');
  },10000)
  return (
      <div className="cart shadow-xl px-10 bg-base-100 rounded-lg py-5">
        <RxCrossCircled className="w-16 h-16 mx-auto rounded-full text-red-500"/>
        <div className="text-center">
          <h3 className="md:text-2xl text-base font-semibold text-center text-red-500"> Payment Error !</h3>
          <p className=" mt-3 text-red-400 pb-1">{err}</p>
          <p>Your order has not been placed. Please try again later</p>
          <p> Redirecting to Home Page shortly...</p>
          <div className="py-4 text-center">
            <Link to="/products"className="capitalize hover:btn-neutral text-red-500">continue shopping </Link>
          </div>
        </div>
      </div>
  );
};

export default PaymentFailed;
