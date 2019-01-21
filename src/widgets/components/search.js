import React from 'react'
import './search.css'

const Search = (props) => (
  <form 
    className="Search"
    onSubmit = { props.handleSubmit }
  >
    <input
      ref = { props.setInputRef }
      value = { props.value }
      onChange = { props.handleChange }
      type="text" 
      className="Search-input"
      placeholder="Search"
      // defaultValue="Luis Fonsi"
    />
  </form>
)

export default Search;