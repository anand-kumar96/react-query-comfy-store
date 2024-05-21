import React from 'react'

const FormInput = ({label,type,name,defaultValue,size, placeholder,required}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
      placeholder={placeholder} 
      type={type} 
      name={name}
      defaultValue={defaultValue}
      required={required}
      className={`input input-bordered ${size}`} />
    </div>
  )
}

export default FormInput