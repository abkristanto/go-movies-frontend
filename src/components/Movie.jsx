import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const [movie, setMovie] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/movie/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          setError(response.status)
        }
        return response.json()
      })
      .then((json) => {
        setMovie(json.movie)
        setIsLoaded(true)
      },
      (_) => {
        setIsLoaded(true)
      })
  }, [])

  if (error) {
    return <div>Erorr: Invalid endpoint {error}</div>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  }

  if (movie.genres) {
    movie.genres = Object.values(movie.genres)
  } else {
    movie.genres = []
  }
  
  return (
    <>
      <h2>Movie: {movie.title} ({movie.year}) </h2>
      <div className='float-start'>
        <small>Rating: {movie.mpaa_rating}</small>
      </div>
      <div className="float-end">
        {movie.genres.map((m, index) => (
          <span className='badge bg-secondary me-1' key={index}>
            {m}
          </span>
        ))}
      </div>
      <div className='clearfix'></div>
      <hr/>
      <table className='table table-compact table-striped'>
        <thead></thead>
        <tbody>
          <tr>
            <td><strong>Title:</strong></td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td><strong>Description:</strong></td>
            <td>{movie.description}</td>
          </tr>
          <tr>
            <td><strong>Runtime:</strong></td>
            <td>{movie.runtime} minutes</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Movie