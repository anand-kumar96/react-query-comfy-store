import axios from "axios";
const url = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
     baseURL:url
})

export const formatPrice = (price) => {
     const inrAmount = new Intl.NumberFormat('en-In', {
       style: 'currency',
       currency: 'INR',
     }).format((price/1).toFixed(2));
     return inrAmount;
   };

 export const generatedAmountOption = (number) => {
   return Array.from({length:number},(_,index)=>{
    const amount = index+1;
    return <option key={index}>{amount}</option>
   })
  }

  