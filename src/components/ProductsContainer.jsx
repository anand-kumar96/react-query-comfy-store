import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { useLoaderData } from 'react-router-dom'
import {BsList,BsFillGridFill} from 'react-icons/bs'
import nodata from './../assets/nodata.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLayout } from '../features/toggle/toggleSlice'
const ProductsContainer = () => {
  const {meta} = useLoaderData();
  const dispatch = useDispatch();
  const {layout} = useSelector((state)=> state.toggle);
  const totalProducts = meta.pagination.total;
  const setStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${pattern ===layout ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'}`
  }
  return (
    <>
    <section className="border-b-2 border-base-300 pb-4 mt-6">
      <div className="flex justify-between">
      <h4 className="text-lg font-medium tracking-wider capitalize">{totalProducts} product{totalProducts > 1 && 's'}</h4>
      <div className='flex gap-x-2'>
        <button type='button' className={setStyles('list')} onClick={()=>{
        dispatch(toggleLayout())
        } }><BsList/></button>
        <button type='button' className={setStyles('grid')} onClick={()=>{
          dispatch(toggleLayout())
       }}><BsFillGridFill/></button>
      </div>
      </div>
    </section>
    {totalProducts === 0 ?
    (
      <div className="flex flex-col justify-center items-center">
        <img src={nodata} alt="no data found" className="max-w-[16rem]  pt-6 pb-6" />
        <h5 className='text-2xl'>Sorry, no products matched with your serach, try other filters...</h5> 
      </div>
    
    )
    : layout == 'grid' ? <ProductsGrid/> :  <ProductsList/>}
    </>
  )
}

export default ProductsContainer