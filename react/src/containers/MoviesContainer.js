import React, { useEffect, useState } from 'react';

const MoviesContainer = (props) => {

  useEffect(() => {
    fetch("/api/v1/movies")
    .then((response) => {
      return response.json()
    })
    .then((moviesBody) => {
      //set state
    })
  }, [])

  return(
    <div className="app">
      <h1> All them Disney Movies</h1>
    </div>
  )
}

export default MoviesContainer;
