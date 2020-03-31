import React, { useEffect, useState } from 'react';

import MoviesIndex from '.././components/MoviesIndex'
import MovieForm from './MovieForm'

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

  const addMovie = movie => {
    fetch("/api/v1/movies", {
      method: "POST",
      body: JSON.stringify(movie)
    })
    .then((response) => response.json())
    .then(movie => {
      setMovies([...movies, movie])
    })
  }

  return(
    <div className="app">
      <h1> All them Disney Movies</h1>
      <MovieForm addMovie={addMovie}/>
      <MoviesIndex movies={movies} />
    </div>
  )
}

export default MoviesContainer;
