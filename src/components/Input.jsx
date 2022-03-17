import React from 'react'

const Input = ({ type, name, title, value, handleChange, placeholder }) => {
  return (
    <div className="mb-3">
      <label for="title" className="form-label">
        {title}
      </label>
      <input 
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        />
    </div>
  )
}

export default Input