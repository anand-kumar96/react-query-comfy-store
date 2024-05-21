import React from 'react'

const FormCheckbox = ({label,name,defaultValue,size}) => {
  return (
    <div className="form-control items-center">
     <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
    </label>   
      <input name={name}  type="checkbox" defaultChecked={defaultValue} className={`checkbox checkbox-primary ${size}`} />
    </div>
  )
}

export default FormCheckbox