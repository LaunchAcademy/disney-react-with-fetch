import React, { useState } from "react";

const MovieForm = (props) => {
  const [movieInput, setMovieInput] = useState({
    title: "",
    releaseYear: "",
    runtime: "",
  });

  const handleChange = (event) => {
    setMovieInput({
      ...movieInput,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const clearForm = (event) => {
    event.preventDefault();
    setMovieInput({
      title: "",
      releaseYear: "",
      runtime: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let moviePayload = {
      title: movieInput.title,
      runtime: movieInput.runtime,
      release_year: movieInput.releaseYear,
    };
    props.addMovie(moviePayload);
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={movieInput.title}
        ></input>

        <label htmlFor="releaseYear">Release Year:</label>
        <input
          type="text"
          name="releaseYear"
          id="releaseYear"
          onChange={handleChange}
          value={movieInput.releaseYear}
        ></input>

        <label htmlFor="runtime">Runtime:</label>
        <input
          type="text"
          name="runtime"
          id="runtime"
          onChange={handleChange}
          value={movieInput.runtime}
        ></input>

        <input className="button" type="submit" value="Add Movie"></input>
      </form>
      <button onClick={clearForm} className="button">
        Clear
      </button>
    </div>
  );
};

export default MovieForm;
