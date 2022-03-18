import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

const EditMovie = () => {
  const [movie, setMovie] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  let { id } = useParams();

  useEffect(() => {
    if (id > 0) {
      fetch(`http://localhost:4000/v1/movie/${id}`)
        .then((response) => {
          if (response.status !== 200) {
            setError(response.status)
          }
          return response.json()
        })
        .then((json) => {
          const releaseDate = new Date(json.movie.release_date)
          setMovie({
            id: id,
            title: json.movie.title,
            release_date: releaseDate.toISOString().split("T")[0],
            runtime: json.movie.runtime,
            mpaa_rating: json.movie.mpaa_rating,
            rating: json.movie.rating,
            description: json.movie.description,
          })
          setIsLoaded(true)
        },
        (_) => {
          setIsLoaded(true)
        })
    } else {
      setIsLoaded(true)
    }
  }, [])
  

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    console.log("Form was submitted")
    e.preventDefault()

    const data = new FormData(e.target)
    const payload = Object.fromEntries(data.entries())
    console.log(payload)

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(payload),
    }

    fetch("http://localhost:4000/v1/admin/editmovie", requestOptions)
      .then((response) => response.json())
      .then(data => {
        console.log(data)
      })
  }

  const mpaaOptions = [
    {id: "G", value: "G"},
    {id: "PG", value: "PG"},
    {id: "PG13", value: "PG-13"},
    {id: "R", value: "R"},
    {id: "NC17", value: "NC17"},
  ]

  if (error) {
    return <div>Erorr: Invalid endpoint {error}</div>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  }
  
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