import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-4">
      {products.map((product) => {
        const { title, price, image, company, description } =
          product.attributes;
        const inrPrice = formatPrice(price);
        return (
          <div key={product.id} className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-200 shadow-xl hover:shadow-2xl duration-300 group">
            <img
              src={image}
              alt={title}
              className="h-36 w-36 rounded-md sm:h-40 sm:w-40 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16 mt-3">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-md text-neutral-content">{company}</h4>
              <p className="mt-2 leading-5 max-w-56  lg:max-w-xl line-clamp-2 mb-4">{description}</p>
              <Link to={`/products/${product.id}`} className="btn btn-primary text-primary-content rounded-md btn-xs">Details</Link>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">{inrPrice}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsList;
