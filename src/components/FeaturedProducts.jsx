
import { useNavigate } from "react-router-dom"
import Productsgrid from "./ProductsGrid"
import SectionTitle from "./SectionTitle"


const FeaturedProducts = () => {
  const navigate = useNavigate();
  const handleAllProducts = ()=> {
   navigate('/products')
  }
  return (
    <div className="pt-24">
     <SectionTitle text='featured products'/>
     <Productsgrid/>
     <div className="pt-10 flex justify-center">
     <button className="btn btn-primary uppercase btn-sm text-xs font-semibold hover:btn-secondary tracking-wider" onClick={handleAllProducts}>all products</button>
     </div>
    </div>
  )
}

export default FeaturedProducts