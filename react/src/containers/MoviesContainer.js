import React, { useEffect, useState } from 'react';

import MoviesIndex from "../components/MoviesIndex"
import MovieForm from "./MovieForm"

const MoviesContainer = (props) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("/api/v1/movies")
    .then((response) => {
      return response.json()
    })
    .then((moviesBody) => {
      setMovies(moviesBody.movies)
    })
  }, [])

  const persistNewMovie = (formInfo) => {
    fetch("/api/v1/movies", {
      method: "POST",
      body: JSON.stringify(formInfo)
    })
    .then((response) => {
      return response.json()
    })
    .then((persistedMovie) => {
      // setMovies(movies.concat(persistedMovie))
      setMovies([...movies, persistedMovie])
    })
  }

  return(
    <div className="app">
      <h1> Disney, Disney, Disney (Movies)</h1>

      <MovieForm
        persistNewMovie={persistNewMovie}
      />

      <MoviesIndex
        movies={movies}
      />
    </div>
  )
}

export default MoviesContainer;
