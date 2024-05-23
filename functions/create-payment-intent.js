// we are in node enviroment
// see in browser=> domain/.netlify/functions/hello => http://localhost:8888/.netlify/functions/create-payment-intent
import dotenv from 'dotenv';
dotenv.config();
const stripe = require("stripe")(process.env.VITE_APP_STRIPE_SECRET_KEY);

export async function handler(event, context) {
  if (event.body) {
    const { cartItems, cartTotal, shipping, tax, discount, paymentAddress } =
      JSON.parse(event.body);
    let { first, last, address, city, postal, state } = paymentAddress;
    const calculateOrderAmount = () => {
      const totalSum = cartTotal + shipping + tax + discount;
      return parseInt(totalSum);
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
        description: "for ecommerce project",
        shipping: {
          name: `${first} ${last}`,
          address: {
            line1: address,
            postal_code: `${postal}`,
            city: city,
            state: state,
            country: "US",
          },
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
}
