import React, { useState, useEffect } from 'react'

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
  console.log(movie)
  

  return (
    <>
      <h2>Add/Edit Movie</h2>
      <hr />
      <form method="post">
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input 
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
          <label for="release_date" className="form-label">
            Release Date
          </label>
          <input 
            type="text"
            className="form-control"
            id="release_date"
            name="release_date"
            value={movie.release_date}
            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
          <label for="runtime" className="form-label">
            Runtime
          </label>
          <input 
            type="text"
            className="form-control"
            id="runtime"
            name="runtime"
            value={movie.runtime}
            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
          <label for="mpaa_rating" className="form-label">
            MPAA Rating
          </label>
          <select 
            className="form-select"
            value={movie.mpaa_rating} 
            name="mpaa_rating"
            onChange={handleChange}  
            placeholder="Choose..."       
          >
            <option className="form-select">Choose</option>
            <option className="form-select" value="G">G</option>
            <option className="form-select" value="PG">PG</option>
            <option className="form-select" value="PG13">PG13</option>
            <option className="form-select" value="R">R</option>
            <option className="form-select" value="NC17">NC17</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="rating" className="form-label">
            Rating
          </label>
          <input 
            type="text"
            className="form-control"
            id="rating"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
            />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <textarea className="form-control" id="description" name="description" rows="3" onChange={handleChange}>
            {movie.description}
          </textarea>
        </div>
        <hr />

        <button className="btn btn-primary">Save</button>
        
      </form>
    </>
  )
}

export default EditMovie