import React from 'react'

const TextArea = ({ name, title, value, handleChange, placeholder}) => {
  return (
    <div className="mb-3">
      <label for="description" className="form-label">
        {title}
      </label>
      <textarea className="form-control" id={name} name={name} rows="3" onChange={handleChange} placeholder={placeholder}>
        {value}
      </textarea>
    </div>
  )
}

export default TextArea