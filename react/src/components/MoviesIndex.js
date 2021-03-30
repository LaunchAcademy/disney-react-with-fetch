import React from 'react';

import MovieTile from './MovieTile'

const MoviesIndex = props => {

  let movies = props.movieObjects.map(movie => {
    return(
      <MovieTile
        key={movie.id}
        movie={movie}
      />
    )
  })

  return(
    <ul className="list">
      {movies}
    </ul>
  );
}

export default MoviesIndex;
