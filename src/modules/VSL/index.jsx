import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import { VSLContainer, Player, ProgressionBar } from './styles'

import PreviewFile from '../../assets/video/preview.gif'
import Volume from './SVG'

import configuration from '../../../configuration.json'

const HAS_BUTTON_DELAY = configuration.geral.button_action.hasDelay
const BUTTON_DELAY = configuration.geral.button_action.delay
const HAS_PAGE_DELAY = configuration.geral.landing_page.hasDelay
const PAGE_DELAY = configuration.geral.landing_page.delay

const URL = configuration.geral.vsl.url
const PLAYERS_CONFIG = {
  youtube: {
    playerVars: {
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      disablekb: 1,
      fs: 0,
      rel: 0,
    }
  },
  vimeo: {
    playerOptions: {
      controls: false,
      byline: false,
      title: false,
      playsinline: false,
      keyboard: false
    }
  },
  wistia: {
    options: {
      controlsVisibleOnLoad: false,
      fullscreenButton: false,
      fullscreenOnRotateToLandscape: false,
      playButton: false
    }
  }
}

export default function VSL ({ setShowButton, setShowPage }) {
  const [init, setInit] = useState(false)
  const [play, setPlay] = useState(false)
  const [interaction, setInteraction] = useState('Click')

  useEffect(() => {
    if (window.innerWidth <= 768)
      setInteraction('Toque')
  }, [])

  const handleClick = () => {
    setInit(true)
    setPlay(!play)
  }

  const Film = () => {
    return <div className="film" onClick={() => handleClick()}></div>
  }

  const Preview = () => {
    return  <img className='thumbnail' src={PreviewFile}/>
  }

  const AudioButton = () => {
    return <div className="button">
      <div>
        <Volume/>
        <span>{interaction} para ouvir.</span>
        <div className="circle-i"></div>
        <div className="circle-ii"></div>
        <div className="circle-iii"></div>
      </div>
    </div>
  }

  return (
    <VSLContainer>
      <Player>
        <Film/>
        { !init ? <Preview/> : null }
        { !play ? <AudioButton/> : null }
        <Video play={play} setShowButton={setShowButton} setShowPage={setShowPage}/>
      </Player>
    </VSLContainer>
  )
}

function Video ({ play, setShowButton, setShowPage }) {
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (!HAS_BUTTON_DELAY)
      setShowButton(true)

    if (!HAS_PAGE_DELAY)
      setShowPage(true)
  }, [])

  const handleShowControl = (time) => {
    if (HAS_BUTTON_DELAY && BUTTON_DELAY <= time)
      setShowButton(true)

    if (HAS_PAGE_DELAY && PAGE_DELAY <= time)
      setShowPage(true)
  }

  return <>
    <ReactPlayer
      className='video'
      height={0}
      width={0}
      url={URL}
      playing={play}
      onDuration={(time) => setDuration(time)}
      onProgress={(data) => handleShowControl(data.playedSeconds)}
      config={PLAYERS_CONFIG}
    />
    <ProgressionBar duration={duration} isPlay={play}/>
  </>
}
