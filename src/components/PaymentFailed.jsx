import React from "react";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
const PaymentFailed = () => {
  return (
    <div className="grid gap-6 justify-center mt-10 ">
      <div className="cart shadow-xl px-10 bg-base-100 rounded-lg">
        <RxCrossCircled className="w-16 h-16 mx-auto rounded-full text-red-500"/>
        <div class="text-center">
          <h3 class="md:text-2xl text-base font-semibold text-center text-red-500"> Payment Error!</h3>
          <p class=" my-2">Your order has not been placed. Please try again later</p>
          <p> Have a great day! </p>
          <div class="py-10 text-center">
            <Link to="/products"className="btn capitalize hover:btn-neutral btn-error">continue shopping </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
