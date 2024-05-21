import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { GlobalLoading, Header, Navbar } from '../components'
import Footer from './Footer'
import Services from '../components/Services'
import NewsLetter from '../components/NewsLetter'

const HomeLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading'
  return (
    <>
    <Header/>
    <Navbar/>
    {isLoading ? 
    <GlobalLoading/> 
    : 
    <section className="align-element py-16">
     <Outlet/>
    </section>
    }
    {path === '/' &&  <Services/>}
    {path === '/' &&  <NewsLetter/>}
    <Footer/>
    </>
  )
}

export default HomeLayout