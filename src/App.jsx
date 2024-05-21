
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import {loader as landingLoader} from './pages/Landing'
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

import { ErrorElement } from "./components";
import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import {action as checkoutAction} from './components/CheckoutForm'
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PaymentCheckout from "./components/PaymentCheckout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000*60*5,
    },
  },
})

// Routes since we need single routes --> it supports data APIs:
const router = createBrowserRouter([
  /* Home Routes */
 {
  path:'/',element:<HomeLayout/>, errorElement:<Error/>,
   children:[
    { index:true, element:<Landing/>,errorElement:<ErrorElement/>, loader:landingLoader(queryClient)},
    { path:'/products', element:<Products/>, errorElement:<ErrorElement/>, loader:productsLoader(queryClient)},
   // we get params in loader
    { path:'/products/:id', element:<SingleProduct/>,errorElement:<ErrorElement/>, loader:singleProductLoader(queryClient)},
    { path:'/cart', element:<Cart/>},
    { path:'/checkout', element:<Checkout/>, loader:checkoutLoader(store), action:checkoutAction(store,queryClient)},
    { path:'/about', element:<About/>},
    { path:'/orders', element:<Orders/>, loader:ordersLoader(store,queryClient)},
    { path:'/payment', element:<PaymentCheckout/>},
   ]
  },

  /* Auth Routes */
  { path:'/login', element:<Login/>, errorElement:<Error/>,action:loginAction(store)},
  { path:'/register', element:<Register/>, errorElement:<Error/>, action:registerAction},
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App