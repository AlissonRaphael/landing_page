import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

import Gif from '../../assets/gif.gif'

import Volume from './SVG'
import { ContainerStyle, Player, ProgressionBar } from './styles'

const URL = process.env.URL_VIDEO

export default function VSL () {
  const [init, setInit] = useState(false)
  const [play, setPlay] = useState(false)

  const handleClick = () => {
    setInit(true)
    setPlay(!play)
  }

  return (
    <ContainerStyle>
      <Player>
        <Film handleClick={handleClick}/>
        { !init ? <Thumbnail/> : null }
        { !play ? <AudioButton/> : null }
        <Video play={play}/>
      </Player>
    </ContainerStyle>
  )
}

function Film ({ handleClick }) {
  return (
    <div
      className="film"
      onClick={() => handleClick()}
    >
    </div>
  )
}

function Video ({ play }) {
  const [duration, setDuration] = useState(0)

  return (
    <>
      <ReactPlayer
        className='video'
        height={0}
        width={0}
        url={URL}
        controls={false}
        onDuration={(time) => setDuration(time)}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              modestbranding: 1,
              disablekb: 1
            }
          }
        }}
      />
      <ProgressionBar
        duration={duration} 
        isPlay={play}
      />
    </>
  )
}

function Thumbnail () {
  return (
    <img
      className='thumbnail'
      src={Gif}
    />
  )
}

function AudioButton () {
  const [interaction, setInteraction] = useState('click')

  useEffect(() => {
    if (window.innerWidth <= 768)
      setInteraction('touch')
  }, [])

  return (
    <div className="button">
      <div>
        <span>O vídeo começou</span>
        <Volume/>
        <span>{interaction === 'click' ? 'Click' : 'Toque'} para ouvir.</span>
      </div>
    </div>
  )
}
