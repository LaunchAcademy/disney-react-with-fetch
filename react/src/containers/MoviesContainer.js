import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(newMovie) {
    fetch('/api/v1/movies', {
      method: "POST",
      body: JSON.stringify(newMovie)
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(newMovie => {
      let updatedMovies = this.state.movies.concat(newMovie)

      this.setState({movies: updatedMovies})
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  componentDidMount() {
    fetch('/api/v1/movies')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({movies: body.movies})
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

  render() {
    return(
      <div className="container">
        <h1>My Favorite Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
        <hr />
        <FormContainer
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }

}

export default MoviesContainer;
