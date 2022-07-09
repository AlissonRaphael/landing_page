import { useState } from 'react'

import { ActionContainer, Button } from './styles'
import Download from '../../assets/download.svg'

const DELAY_BUTTOM = process.env.DELAY_BUTTON

export default function Action () {
  const [showButton, setShowButton] = useState(false)

  setInterval(() => {
    setShowButton(true)
  },DELAY_BUTTOM*1000)

  return (
    <ActionContainer>
      { showButton ?
        <Button href="">
          <img src={Download}/>
          <span>Baixar agora</span>
        </Button> : null
      }
    </ActionContainer>
  )
}