import React, { Component } from 'react'
import VideoPlayerLayout from './../components/video-player-layout'
import Video from './../components/video'
import Title from './../components/title'
import PlayPause from './../components/play-pause'
import Timer from './../components/timer'
import VideoPlayerControls from './../components/video-player-controls'
import formattedTime from './../../libs/time'
import ProgressBar from './../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

class VideoPlayer extends Component {

  state = {
    play: false,
    duration: 0,
    currentTime: 0,
    loading: false,
    lastVolume: 1,
    volumeColor: "white"
  }

  togglePlay = (event) => {
    this.setState({
      play: !this.state.play
    })
  }

  componentDidMount() {
    this.setState({
      play: !this.props.autoPlay
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  volumeColor = () => {
    this.video.volume == 0
      ? this.setState({ volumeColor: "red" })
      : this.setState({ volumeColor: "white" })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({
      lastVolume: this.video.volume
    })

    this.volumeColor()
  }

  handleVolume = event => {
    this.video.volume = this.video.volume > 0 
                          ? 0
                          : this.state.lastVolume

    this.volumeColor()
    
  }

  handleFullScreen = event => {
    if (!document.webkitIsFullScreen) {
      // mando a full screen
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
      // salgo del full screen
    }
  }

  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title 
          title={this.props.title}
        />
        <VideoPlayerControls>
          <PlayPause
            play={this.state.play}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.handleVolume}
            volumeColor={this.state.volumeColor}
          />
          <FullScreen
            handleFullScreen={this.handleFullScreen}
          />
        </VideoPlayerControls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          muted={false}
          autoPlay={this.props.autoPlay}
          src={this.props.src}
          play={this.state.play}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;