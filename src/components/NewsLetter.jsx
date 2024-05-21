import React, { useState } from 'react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify';
const NewsLetter = () => {
    const [email,setEmail] = useState('');
    const handleChange = (e) =>{
    setEmail(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email.trim().length==0) return;
        setEmail('')
        toast.success('Thanks for Subscribing us')
    }
 return (
    <>
    <div className="relative isolate overflow-hidden bg-base-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8">
            Discover stylish, handcrafted furniture and exclusive offers. Transform your home with our tips and special deals.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                value={email}
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-base-200 px-3.5 py-2  shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                onChange={handleChange}
                />
              <button
                type="submit"
                className="rounded-md btn btn-primary font-semibold"
                onClick={handleSubmit}
                >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 " aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold">Weekly articles</dt>
              <dd className="mt-2 leading-7">
              Discover fresh insights and inspiration in our weekly articles covering trends, tips, and more.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 " aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold ">No spam</dt>
              <dd className="mt-2 leading-7">
              Engage with our diverse range of weekly articles for valuable insights, inspiration, and expert advice.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
              clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            />
      </div>
    </div>
</>
  )
}

export default NewsLetter



