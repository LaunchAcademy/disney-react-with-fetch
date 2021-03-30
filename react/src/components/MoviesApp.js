import React, { useEffect, useState } from 'react';

// import MoviesIndex from "./../components/MoviesIndex"
import MoviesIndex from "./MoviesIndex"
import MovieForm from "./MovieForm"

const MoviesApp = (props) => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const moviesResponse = await fetch("/api/v1/movies")
    const parsedMovies = await moviesResponse.json()
    setMovies(parsedMovies.movies)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const passUpNewMovie = async (newMovieFormData) => {

    const postMovieResponse = await fetch("/api/v1/movies", {
      method: "POST",
      body: JSON.stringify(newMovieFormData)
    })
    const newMovieObject = await postMovieResponse.json()
  
    const oldMoviesPlusNewMovie = movies.concat(newMovieObject)
    setMovies(oldMoviesPlusNewMovie)  
  }
  

  return(
    <div className="app">
      <h1> All them Disney Movies</h1>

      <MovieForm 
        passUpNewMovie={passUpNewMovie}
      />

      <MoviesIndex 
        movieObjects={movies}
      />  
      
    </div>
  )
}

export default MoviesApp;
