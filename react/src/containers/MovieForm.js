import React, { useState } from 'react';

const MovieForm = props => {
  const initialValue = {
    title: "",
    releaseYear: "",
    runtime: ""
  }
  const [movieData, setMovieData] = useState(initialValue)


  const handleMovieDataChange = (event) => {
    event.preventDefault()
    setMovieData({
      ...movieData,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = event => {
    setMovieData(initialValue)
  }

  const onSubmitHandler = event => {
    event.preventDefault()

    props.addNewMovie({
      title: movieData.title,
      release_year: movieData.releaseYear,
      runtime: movieData.runtime
    })

    clearForm()
  }

  return(
    <div className="form">
      <form onSubmit={onSubmitHandler}>
        <label>
          Title:
          <input type="text" id="title" name="title" onChange={handleMovieDataChange} value={movieData.title}/>
        </label>

        <label>
          Release Year:
          <input type="text" id="releaseYear" name="releaseYear" onChange={handleMovieDataChange} value={movieData.releaseYear}/>
        </label>

        <label>
          Runtime:
          <input type="text" id="runtime" name="runtime" onChange={handleMovieDataChange} value={movieData.runtime}/>
        </label>

        <input type="submit" className="button"></input>
      </form>
      <button className="button" onClick={clearForm}>Clear</button>
    </div>
  )
}

export default MovieForm
