import React, { useState, useEffect } from 'react'
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

const EditMovie = () => {
  const [movie, setMovie] = useState({})
  const [isloaded, setIsloaded] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    console.log("Form was submitted")
    e.preventDefault()
  }

  const mpaaOptions = [
    {id: "G", value: "G"},
    {id: "PG", value: "PG"},
    {id: "PG13", value: "PG-13"},
    {id: "R", value: "R"},
    {id: "NC17", value: "NC17"},
  ]
  
  console.log(movie)
  

  return (
    <>
      <h2>Add/Edit Movie</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="id"
          id="id"
          value={movie.id}
          onChange={handleChange}
          />
        <Input
          type="text"
          name="title"
          title="Title"
          value={movie.title}
          handleChange={handleChange}
          placeholder="Title"
        />
        <Input
          type="text"
          name="release_date"
          title="Release Date"
          value={movie.release_date}
          handleChange={handleChange}
          placeholder="Release Date"
        />
        <Input
          type="text"
          name="runtime"
          title="Runtime"
          value={movie.runtime}
          handleChange={handleChange}
          placeholder="Runtime"
        />
        <Select 
          title="MPAA Rating"
          name="mpaa_rating"
          options={mpaaOptions}
          value={movie.mpaa_rating}
          handleChange={handleChange}
          placeholder="Choose..."
        />
        <Input
          type="text"
          name="rating"
          title="Rating"
          value={movie.rating}
          handleChange={handleChange}
          placeholder="Rating"
        />
        <TextArea
          name="description"
          title="Description"
          value={movie.description}
          handleChange={handleChange} 
          placeholder="Description"
        />
        <hr />

        <button className="btn btn-primary">Save</button>
        
      </form>
    </>
  )
}

export default EditMovie