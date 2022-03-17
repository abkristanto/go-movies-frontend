import React from 'react'

const Select = ({ title, name, value, handleChange, options }) => {
  return (
    <div className="mb-3">
      <label for={name} className="form-label">
        {title}
      </label>
      <select 
        className="form-select"
        value={value} 
        name={name}
        onChange={handleChange}  
        placeholder="Choose..."       
      >
        <option className="form-select">Choose</option>
        {options.map((option) => (
          <option className="form-select" key={option.id} value={option.id} label={option.value}>{option.value}</option>
        ))}
        {/* <option className="form-select" value="G">G</option>
        <option className="form-select" value="PG">PG</option>
        <option className="form-select" value="PG13">PG13</option>
        <option className="form-select" value="R">R</option>
        <option className="form-select" value="NC17">NC17</option> */}
      </select>
    </div>
  )
}

export default Select