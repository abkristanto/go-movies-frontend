import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Genres = ({ setGenre }) => {
  const [genres, setGenres] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:4000/v1/genres")
      .then((response) => {
        if (response.status !== 200) {
          setError(response.status)
        }
        return response.json()
      })
      .then((json) => {
        setGenres(json.genres)
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
      <h2>Genres</h2>
      <div className="list-group">
        {genres.map((m) => (
          <Link key={m.id} to={`/genre/${m.id}`} onClick={() => setGenre(m.genre_name)} className="list-group-item list-group-item-action">{m.genre_name}</Link>
        ))}
      </div>
    </>
  )
}

export default Genres