import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="grid gap-6 justify-center mt-10 ">
      <div className="cart shadow-xl px-10 bg-base-100 rounded-lg">
        <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto my-6">
          <path fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
        </svg>
        <div class="text-center">
          <h3 class="md:text-2xl text-base font-semibold text-center"> Payment Done!</h3>
          <p class=" my-2"> Thank you for completing your secure online payment.</p>
          <p> Have a great day! </p>
          <div class="py-10 text-center">
            <Link to="/products"className="btn btn-primary capitalize hover:btn-secondary">continue shopping </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
