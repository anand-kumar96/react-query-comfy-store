import React from 'react'
import { useLoaderData } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrdersList = () => {
  const {orders,meta} = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total orders: {meta.pagination.total}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* HEAD */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th className='hidden sm:block'>Products</th>
              <th>Cost</th>
              <th className='hidden sm:block'>Date</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
          {orders.map((order)=> {
           const orderId = order.id;
           const {address,name,numItemsInCart,orderTotal,createdAt} = order.attributes;
           const date = day(createdAt).format('hh:mm a - MMM Do, YYYY')
           return <tr key={orderId}>
            <td>{name}</td>
            <td>{address}</td>
            <td className='hidden sm:block'>{numItemsInCart}</td>
            <td>{orderTotal}</td>
            <td className='hidden sm:block'>{date}</td>
           </tr>
          })}
          </tbody>
        </table>
      </div>
    </div>  
    );
}

export default OrdersList