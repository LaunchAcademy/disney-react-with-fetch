import React, { useState } from 'react';

const MovieForm = props => {

  const [movieFields, setMovieFields] = useState({
    title: "",
    release_year: null,
    runtime: null
  })

  const submitCallback = (event) => {
    event.preventDefault()
    props.passUpNewMovie(movieFields)
  }

  const inputChangeCallback = (event) => {
    let fieldName = event.currentTarget.name
    let fieldValue = event.currentTarget.value

      setMovieFields({
      ...movieFields,
      [fieldName]: fieldValue
    })
  }
 
  return(
    <div className="form">
      <form onSubmit={submitCallback}>
        <label> Title:
          <input type="text" name="title" onChange={inputChangeCallback} />
        </label>

        <label> Release year:
          <input type="number" name="release_year" onChange={inputChangeCallback} />
        </label>

        <label> Runtime:
          <input type="text" name="runtime" onChange={inputChangeCallback} />
        </label>

        <input type="submit" value="MOAR FRANCHISES FOR THE BEAST"/>
      </form>
    </div>
  )
}

export default MovieForm;
