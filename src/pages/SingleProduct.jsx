import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generatedAmountOption } from "../utils";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

//react query
const singleProductsQuery = (url,id) =>{
 return  {
  queryKey:['singProduct',id], // important
  queryFn:()=> customFetch(url)
}
}

export const loader =(queryClient)=>  async ({ params }) => {
  const url = `/products/${params.id}`;
  const response = await queryClient.ensureQueryData(singleProductsQuery(url,params.id));
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const dispatch = useDispatch();
  const { image, title, price, description, colors, company } = product.attributes;
  const inrAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e)=> {
      setAmount(parseInt(e.target.value))
  }

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company
  };

  return (
    <section className="text-md breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      {/* PRODUCTS */}
      <div className="mt-6 grid gap-y-8 md:grid-cols-2 md:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          className="rounded-lg h-96 w-96 object-cover lg:w-full lg:h-[30rem]"
          alt={title}
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h4 className="text-xl font-semibold text-neutral-content mt-2">
            {company}
          </h4>
          <p className="text-xl mt-2">{inrAmount}</p>
          <p className="mt-5 leading-8">{description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
            <div className="mt-2 flex justify-start">
              {colors.map((color,index) => {
                return ( 
                <Fragment key={index}>
                {color == productColor ?
                 <button key={color} type="button" 
                    className={`badge w-6 h-6 mr-2 border-2 border-secondary place-content-center`}
                    style={{backgroundColor:`${color}`}}
                    onClick={() => setProductColor(color)}><p className="text-base-300 text-center font-bold">✓</p>
                    </button> 
               : <button key={color} type="button" 
                    className={`badge w-6 h-6 mr-2`}
                    style={{backgroundColor:`${color}`}}
                    onClick={() => setProductColor(color)}>
                    </button>
                }
                </Fragment>
                );
              })}
            </div>
          </div>
        {/* AMOUNT */}
        <div className="form-control w-full max-w-xs mt-4">
            <label htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">Amount</h4>
            </label>
            <select className="select select-bordered select-secondary select-md mt-2" value={amount} onChange={handleAmount}>
              {generatedAmountOption(10)}
            </select>
          <div className="mt-8">
            <button className="btn btn-secondary btn-md uppercase" onClick={()=>dispatch(addItem({product:cartProduct}))}>add to cart</button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
