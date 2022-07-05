import { useState, useEffect } from 'react'

import Gif from '../../assets/gif.gif'

import Volume from './SVG'
import { ContainerStyle, Player } from './styles'

export default function VSL () {
  return (
    <ContainerStyle>
      <Player>
        <Film/>
        <AudioButton/>
        <Thumbnail/>
        <Video/>
      </Player>
    </ContainerStyle>
  )
}

function Film () {
  return (
    <div
      className="film"
      onClick={() => console.log('play/pause video')}
    >
    </div>
  )
}

function Video () {
  return (
    <iframe
      className="video"
      src={process.env.URL_VIDEO}
      frameborder="0"
    >
    </iframe>
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
