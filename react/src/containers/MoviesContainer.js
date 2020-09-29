import React, { useEffect, useState } from "react";

import MoviesIndex from ".././components/MoviesIndex";
import MovieForm from "./MovieForm";

const MoviesContainer = (props) => {
  const [movieRecords, setMovieRecords] = useState([]);

  useEffect(() => {
    fetch("/api/v1/movies")
      .then((response) => {
        return response.json();
      })
      .then((moviesBody) => {
        let movieList = moviesBody.movies;
        setMovieRecords(movieList);
      });
  }, []);

  const addMovie = (moviePayload) => {
    // debugger;
    fetch("/api/v1/movies", {
      method: "POST",
      body: JSON.stringify(moviePayload),
    })
      .then((response) => {
        return response.json();
      })
      .then((movie) => {
        setMovieRecords([...movieRecords, movie]);
      });
  };

  return (
    <div className="app">
      <h1> All them Disney Movies</h1>
      <MovieForm addMovie={addMovie} />
      <MoviesIndex movies={movieRecords} />
    </div>
  );
};

export default MoviesContainer;
