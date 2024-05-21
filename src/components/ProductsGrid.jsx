import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const {title, price, image } = product.attributes;
        const inrPrice = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card w-full shadow-xl hover:shadow-2xl transition duration-300 bg-base-200 '
          >
            <figure className='px-1 lg:px-3 pt-3'>
              <img
                src={image}
                alt={title}
                className='rounded-md h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card flex flex-row justify-between text-center px-3 py-5'>
              <h2 className='capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary font-medium'>{inrPrice}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;