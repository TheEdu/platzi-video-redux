import React, { Component } from 'react'
import Search from './../components/search'

class SearchContainer extends Component {

  state = {
    value: "Luis-Fonsi"
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("submit", this.input.value)
  }

  handleInputChange= event => {
    const newValue = event.target.value
    console.log(newValue)
    this.setState({
      value: newValue.replace(" ", "-")
    })
  }

  setInputRef = element => {
    this.input = element
  }

  render() {
    return (
      <Search
        setInputRef  = { this.setInputRef  }
        value  = { this.state.value }
        handleChange = { this.handleInputChange }

        handleSubmit = { this.handleSubmit }
      />
    )
  }
}

export default SearchContainer;