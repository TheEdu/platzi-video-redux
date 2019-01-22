import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaContainer from './../containers/media.js'
import './playlist.css'

class Playlist extends Component {

  render() {
    const playlist = this.props.playlist
    return (
      <div className="Playlist">
        {
          playlist.map((mediaId) => {
            return (
              <MediaContainer
                id={mediaId}
                key={mediaId}
                handleOpenModal = { this.props.handleOpenModal }
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