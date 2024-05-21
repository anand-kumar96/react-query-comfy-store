import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
  const {meta,params} = useLoaderData();
  const {search,category,company,order,price,shipping} = params;
  return (
   <Form className="grid bg-base-200 rounded-md px-8 py-4 gap-x-4 gap-y-4 md:gap-y-8 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

    {/* SERACH */}
    <FormInput label='Search Product' type='search' name='search'defaultValue={search} size='input-sm'placeholder='search product...' />

     {/* CATEGORY */}
    <FormSelect label='select category' name='category' defaultValue={category} size='select-sm' list ={meta.categories}  />

     {/*COMPANY*/}
    <FormSelect label='select comapny' name='company' defaultValue={company} size='select-sm' list ={meta.companies}  />

     {/* ORDER */}
    <FormSelect label='Sort By' name='order' defaultValue={order} size='select-sm' list ={["a-z","z-a","low","high"]} />
    
     {/* PRICE */}
    <FormRange label ='Select price'name='price' size='range-sm' price ={price} />

     {/* SHIPPING */}
    <FormCheckbox label='free shipping' name='shipping' defaultValue={shipping} size= 'checkbox-sm' />

     {/* SERACH BUTTON*/}
    <button type='submit' className="btn btn-primary btn-sm">search</button>

     {/* RESET BUTTON */}
    <Link to='/products' className="btn btn-accent btn-sm">reset</Link>
   </Form>
  )
}

export default Filters