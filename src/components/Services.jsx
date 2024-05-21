import React from 'react'
import {services} from './../utils/services'
const Services = () => {
  return (
    <div className="mt-10 bg-base-300 py-20 rounded-md shadow-md px-10 ">
      <div className="align-element">
        <article className="grid gap-4 md:grid-cols-2">
          <h3 className="text-4xl capitalize mb-8 font-bold text-primary">
            custom furniture <br /> built only for you
          </h3>
          <p className="mb-0 text-lg leading-7">
            Transform your vision into reality with our bespoke furniture,
            handcrafted by skilled artisans using the finest materials. Each
            piece is uniquely designed to reflect your style and meet your
            needs, offering unparalleled beauty and durability. Experience
            personalized luxury with Custom Furniture: Built only For You.
          </p>
        </article>
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {services.map((service)=>{
            const{id,title,icon,text} = service
            return <article key={id} className="flex flex-col justify-center place-items-center text-center p-10 bg-base-200 rounded-xl shadow-xl">
            <span className='flex justify-center items-center w-20 h-20 bg-base-300 rounded-full'>{icon}</span>
            <h4 className='capitalize text-lg py-2 font-semibold tracking-wide'>{title}</h4>
            <p className='leading-6 text-start py-2'>{text}</p>
          </article>
          })}
        </div>
    </div>
 </div>
  )
}

export default Services