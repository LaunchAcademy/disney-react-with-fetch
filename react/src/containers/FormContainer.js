import React, {Component} from 'react'
import TextField from '../components/TextField'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      release_year: "",
      runtime: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.prepareFormData = this.prepareFormData.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  clearForm() {
    this.setState({
      title: "",
      release_year: "",
      runtime: ""
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  prepareFormData(event) {
    event.preventDefault()
    let title = this.state.title
    let release_year = this.state.release_year
    let runtime = this.state.runtime

    let newMovieObject = {
      title: title,
      release_year: parseInt(release_year, 10),
      runtime: +runtime
    }

    this.props.handleSubmit(newMovieObject)
    this.clearForm()
  }

  render() {
    return (
      <form onSubmit={this.prepareFormData} >
        <TextField
          label="Movie Title:"
          name="title"
          value={this.state.title}
          handleChange={this.handleChange}
        />
        <TextField
          label="Runtime:"
          name="runtime"
          value={this.state.runtime}
          handleChange={this.handleChange}
        />
        <TextField
          label="Release Year:"
          name="release_year"
          value={this.state.release_year}
          handleChange={this.handleChange}
        />

        <input type="submit" className="button" />
      </form>
    )
  }
}

export default FormContainer
