import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const OneGenre = ({ genre }) => {
  const [movies, setMovies] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/v1/movies/${id}`)
      // .then((res) => res.json())
      .then((response) => {
        if (response.status !== 200) {
          setError(response.status)
        }
        return response.json();
      })
      .then((json) => {
        setMovies(json.movies)
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

  return (
    <>
      <h2>Genre: {genre}</h2>
        <div className='list-group'>
          {movies?.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`} className="list-group-item list-group-item-action">{movie.title}</Link>
          ))}
        </div>
    </>
  )
}

export default OneGenre