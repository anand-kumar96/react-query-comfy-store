import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect } from 'react-router-dom'
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
export const action = async({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
  const url = '/auth/local/register';
  const response = await customFetch.post(url,data);
  toast.success('account created successfully')
  return redirect('/login')
  } catch(err){
    let errorMessage = err?.response?.data?.error?.message || 'please double check your credential';
    if(errorMessage=='3 errors occurred') {
      errorMessage = 'username,email or password field can not be empty'
    }
    toast.error(errorMessage);
    return null;
  }
}
const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form 
       method ='POST'
       className='card w-96 p-4 bg-base-100 shadow-lg flex flex-col gap-y-3 ' 
       >
        <h4 className="text-center text-3xl font-bold">Create an Account</h4>
        <FormInput
        type='text'
        label='username'
        name='username'
        defaultValue=''
        />
        <FormInput
        type='email'
        label='email'
        name='email'
        defaultValue=''
        />
        <FormInput
        type='password'
        label='password'
        name='password'
        defaultValue=''
        />
        <SubmitBtn text='Register'type='submit' bg='btn-primary'/>
        <p className ='text-center'>Already a member ? <Link to='/login' className ='ml-2 link link-primary link-hover capitalize' >Login</Link> </p>
      </Form>
    </section>
  )
}

export default Register