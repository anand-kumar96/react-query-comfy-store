import React, { useState } from 'react'
import { formatPrice } from '../utils';

const FormRange = ({label,name,size,price}) => {
    const step =1000;
    const maxPrice =100000;
    const [range,setRange] = useState(price || maxPrice);
  return (
    <div className="form-control">
    <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
        <span className='text-sm'>{formatPrice(range)}</span>
    </label>
    <input type="range" name={name} min={0} max={maxPrice} step={step} value={range} onChange={(e)=>setRange(e.target.value)} className={`range range-primary ${size}`} />
    <label htmlFor={name} className="label">
        <span className='text-xs font-semibold'>0</span>
        <span className='text-xs font-semibold'>Max: {formatPrice(maxPrice)}</span>
    </label>
    </div>
  )
} 

export default FormRange