import React, { Component } from 'react'
import './video.css'


class Video extends Component {
  togglePLay() {
    if (this.props.play) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.play != this.props.play) {
      this.togglePLay()
    }
  }

  setRef = element => {
    this.video = element
  }

  render() {

    const {
      muted,
      autoPlay,
      src,
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props

    return (
      <div className="Video">
        <video
          ref={this.setRef}
          muted={muted}
          autoPlay={autoPlay}
          src={src}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    )
  }
}

export default Video;