import { useSelector } from "react-redux"
import Filters from "../components/Filters"
import PaginationContainer from "../components/PaginationContainer"
import ProductsContainer from "../components/ProductsContainer"
import { customFetch } from "../utils"

//react query
const productsQuery = (queryParams,url) =>{
  const { search, category, company, sort, price, shipping, page } = queryParams;
  return {
    queryKey:[
      'products',
       search ?? '',
       category ?? 'all',
       company ?? 'all',
       sort ?? 'a-z',
       price ?? 100000,
       shipping ?? false,
       page ?? 1
    ],
    queryFn:()=> customFetch(url,{params:queryParams})
  }
}
export const loader =(queryClient) => async({request})=> {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const url = '/products'
  const response = await queryClient.ensureQueryData(productsQuery(params,url));
  return {products:response.data.data, meta:response.data.meta,params}
  /*
  ///  manually getting all params --> see mdn for more
  const params = new URL(request.url).searchParams;
  const search = params.get('search');
  const category = params.get('category');
  const company = params.get('company');
  const order = params.get('order');
  const price = params.get('price');
  const shipping = params.get('shipping');
  console.log(search,category,company,order,price,shipping);
  */
}

const Products = () => {
  const cart = useSelector((state)=> state.cart)
  return (
    <>
    <section>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </section>
    </>
  )
}

export default Products