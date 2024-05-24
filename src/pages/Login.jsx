import React from 'react'
import { Form, Link, redirect, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from '../utils';
import {loginUser} from './../features/user/userSlice'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';


/*
Very important point: after login we want to persist user data so how can we do
1) by calling loginUser using dispatch all right but in action useDispatch not work because it is not a component so 
how can we do that =>
  solution we pass store in loginPage while calling this action all right sounds good but another problem
=> we means => loginAction(store)--> but it will immediately invoke the login without clicking login
=> solution we change action as callback function means it will return a function like this
export const action = (store) => async({request}) =>{
  // do here work
}

-> redirect used in action and loader
*/
const url = '/auth/local'
export const action = (store) => 
  async({request}) => {
  const formData = await request.formData();
  const loginData = Object.fromEntries(formData);
  const { fromPage, ...data } = loginData;
  try {
    const response = await customFetch.post(url,data);
    store.dispatch(loginUser(response.data));
    toast.success('Logged in successfully')
    return redirect(fromPage==='cart' ? '/cart' :'/')
  } catch(err) {
    console.log(err);
    let errorMessage = err?.response?.data?.error?.message || 'email or password is incorrect';
    if(errorMessage=='2 errors occurred') {
      errorMessage = 'email or password field can not be empty'
    }
    toast.error(errorMessage);
    return null;
  }
}
const Login = () => {
  const location = useLocation();
  const fromPage = location.state?.from || 'empty';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading'
  const loginGuestUser = async() =>{
  try {
  const response = await customFetch.post(url,{
    'identifier':'test@test.com',
    'password':'secret'
  })
  dispatch(loginUser(response.data));
  toast.success('welcome to guest user')
  navigate(fromPage === 'cart' ? '/cart':'/')
  } catch(err) {
   console.log(err);
   toast.error('guest user login error, please try again')
  }
  }
  return (
    <section className='h-screen grid place-items-center'>
      <Form 
       method ='POST'
       className='card w-96 p-4 bg-base-100 shadow-lg flex flex-col gap-y-3 ' 
       >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
        type='email'
        label='email'
        name='identifier'
        />
        {/* HIDDEN INPUT FIELD TO PASS PREVIOUS PAGE INFO TO ACTION */}
        <input type="hidden" name="fromPage" value={fromPage} />
        <FormInput
        type='password'
        label='password'
        name='password'
        />
        <SubmitBtn text='Login'type='submit' bg='btn-primary'/>
        <button type='button' className='btn btn-secondary uppercase' onClick={loginGuestUser} disabled={isLoading}>guest user</button>
        <p className ='text-center'>Not a member yet? <Link to='/register' className ='ml-2 link link-primary link-hover capitalize' >register</Link> </p>
      </Form>
    </section>
  )
}

export default Login