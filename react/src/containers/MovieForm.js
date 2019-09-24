import React, { useState } from "react"

const MovieForm = (props) => {

  // const [title, setTitle] = useState("")
  // const [releaseYear, setYear] = useState("")
  // const [runTime, setRuntime] = useState("")
  const [movieFields, setMovieFields] = useState({
    title: "",
    releaseYear: "",
    runtime: ""
  })
  console.log(movieFields)

  const handleMovieFieldChange = (event) => {
    setMovieFields({
      ...movieFields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setMovieFields({
      title: "",
      releaseYear: "",
      runtime: ""
    })
  }

  const handleMovieFormSubmit = (event) => {
    event.preventDefault()

    let moviePayload = {
      title: movieFields.title,
      release_year: movieFields.releaseYear,
      runtime: movieFields.runtime
    }

    props.persistNewMovie(moviePayload)
  }

  return(
    <div className="form">
      <form onSubmit={handleMovieFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleMovieFieldChange} value={movieFields.title}/>
        </label>
        <label>
          Release Date:
          <input type="text" name="releaseYear" onChange={handleMovieFieldChange} value={movieFields.releaseYear}/>
        </label>
        <label>
          Runtime:
          <input type="text" name="runtime" onChange={handleMovieFieldChange} value={movieFields.runtime}/>
        </label>

        <input type="submit"/>

      </form>
      <button className="btn" onClick={clearFields}> Chaos Button </button>
    </div>
  )
}

export default MovieForm
