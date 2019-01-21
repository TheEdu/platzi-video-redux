import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Media from './media.js'
import './playlist.css'

class Playlist extends Component {

  render() {
    const playlist = this.props.playlist
    return (
      <div className="Playlist">
        {
          playlist.map((item) => {
            return (
              <Media 
                {...item} 
                key={item.id}
                openModal = { this.props.handleOpenModal }
              />
            )
          })
        }
      </div>
    )
  }
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired
}


export default Playlist;