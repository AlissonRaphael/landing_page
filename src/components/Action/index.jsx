import { useState } from 'react'
import { ContainerStyle } from './styles'
import Download from '../../assets/download.svg'

const DELAY_BUTTOM = process.env.DELAY_BUTTON

export default function Action () {
  const [showButton, setShowButton] = useState(false)

  setInterval(() => {
    setShowButton(true)
  },DELAY_BUTTOM*1000);

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