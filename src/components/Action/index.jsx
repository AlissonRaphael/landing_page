import { useState } from 'react'
import { ContainerStyle } from './styles'
import Download from '../../assets/download.svg'

export default function Action () {
  const [showButton, setShowButton] = useState(false)

  return (
    <ContainerStyle>
      { showButton ?
        <a href="">
          <img src={Download}/>
          <span>Baixar agora</span>
        </a> : null
      }
    </ContainerStyle>
  )
}