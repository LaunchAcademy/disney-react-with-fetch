import React, { useState } from 'react';

const MovieForm = props => {
  const initialValue = {
    title: "",
    runtime: "",
    releaseYear: ""
  }
  const [movieData, setMovieData] = useState(initialValue)

  const handleInputChange = event => {
    setMovieData({
      ...movieData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = event => {
    setMovieData(initialValue)
  }

  const submitHandler = event => {
    event.preventDefault()

    let formattedMovie = {
      title: movieData.title,
      release_year: movieData.releaseYear,
      runtime: movieData.runtime
    }

    props.addMovie(formattedMovie)
    clearForm()
  }

  return(
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
          value={movieData.title}
        >
        </input>

        <label htmlFor="runtime">Runtime:</label>
        <input
          type="text"
          name="runtime"
          id="runtime"
          onChange={handleInputChange}
          value={movieData.runtime}>
        </input>

        <label htmlFor="releaseYear">Release Year:</label>
        <input
          type="text"
          name="releaseYear"
          id="releaseYear"
          value={movieData.releaseYear}
          onChange={handleInputChange}>
        </input>

        <input type="submit" className="button"></input>
      </form>
      <button className="button" onClick={clearForm}>Clear</button>
    </div>
  )
}

export default MovieForm
