import React, { Component } from "react";
import InputField from "../components/InputField";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: "",
      movieRuntime: "",
      movieYear: ""
    };

    // this.handleTitleChange = this.handleTitleChange.bind(this)
    // this.handleRuntimeChange = this.handleRuntimeChange.bind(this)
    // this.handleYearChange = this.handleYearChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // handleTitleChange(event) {
  //   this.setState({movieTitle: event.target.value})
  // }
  //
  // handleRuntimeChange(event) {
  //   this.setState({movieRuntime: event.target.value})
  // }
  //
  // handleYearChange(event) {
  //   this.setState({movieYear: event.target.value})
  // }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    let payload = {
      title: this.state.movieTitle,
      release_year: parseInt(this.state.movieYear, 10),
      runtime: +this.state.movieRuntime
    }

    this.props.addNewMovie(payload)
    this.clearForm()
    // this.sayMoo()
  }

  clearForm() {
    this.setState({
      movieTitle: "",
      movieRuntime: "",
      movieYear: ""
    })
  }

  // sayMoo() {
  //   console.log("Moo")
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputField
            label="Movie Title"
            name="movieTitle"
            value={this.state.movieTitle}
            handleChange={this.handleChange}
          />
          <InputField
            label="Movie Runtime"
            name="movieRuntime"
            value={this.state.movieRuntime}
            handleChange={this.handleChange}
          />
          <InputField
            label="Movie Year"
            name="movieYear"
            value={this.state.movieYear}
            handleChange={this.handleChange}
          />
          <input type="submit" className="button" />
        </form>
      </div>
    );
  }
}

export default FormContainer;
