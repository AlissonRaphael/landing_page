import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import PreviewFile from '../../assets/video/preview.gif'

import Volume from './SVG'
import { VSLContainer, Player, ProgressionBar } from './styles'


const URL = process.env.URL_VIDEO
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

export default function VSL () {
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
        <span>O vídeo começou</span>
        <Volume/>
        <span>{interaction} para ouvir.</span>
      </div>
    </div>
  }

  return (
    <VSLContainer>
      <Player>
        <Film/>
        { !init ? <Preview/> : null }
        { !play ? <AudioButton/> : null }
        <Video play={play}/>
      </Player>
    </VSLContainer>
  )
}

function Video ({ play }) {
  const [duration, setDuration] = useState(0)

  return <>
    <ReactPlayer className='video' height={0} width={0} url={URL} playing={play}
      onDuration={(time) => setDuration(time)} config={PLAYERS_CONFIG}/>
    <ProgressionBar duration={duration} isPlay={play}/>
  </>
}
