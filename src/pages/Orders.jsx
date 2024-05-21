import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import nodata from './../assets/nodata.svg'
import SectionTitle from '../components/SectionTitle';
import { OrderPagination, OrdersList } from '../components';

//react query for caching
const ordersQuery = (params,user) => {
  return {
    queryKey:['orders',
    user.username,
    params.page ? parseInt(params.page) : 1,
    ],
    queryFn:()=> customFetch.get('/orders',{
      params,
      headers:{
        Authorization: `Bearer ${user.jwt} `
      }
    })
  }
}

export const loader = (store,queryClient) => async({request}) =>{
  const {user} = store.getState().user;
  if(!user) {
    toast.warn('You must be logged to view orders')
    return redirect('/login')
  }
  /// this is for pagination
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const response = await queryClient.ensureQueryData(ordersQuery(params,user))
    return {orders:response.data.data, meta: response.data.meta}
  } catch(err){
    const errorMessage = err?.response?.data?.error?.message || 'there was an error while accessing your orders';
    toast.error(errorMessage);
    if(err?.response?.status===401 || 403) return redirect('/login')
    return null;
  }
  }
const Orders = () => {
  const {meta} = useLoaderData();

  if(meta.pagination.total < 1){
    return <div className="flex flex-col justify-center items-center">
    <img src={nodata} alt="no data found" className="max-w-[16rem]  pt-6 pb-6" />
    <h5 className='text-2xl'>No orders found, Please make an order!</h5> 
  </div>
  }
  
  return (
   <> 
   <SectionTitle text='Your Orders'/>
   <OrdersList />
   <OrderPagination />
   </>
  )
}

export default Orders