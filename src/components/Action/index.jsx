import { useState } from 'react'

import { ActionContainer, Button } from './styles'
import Icon from '../../assets/button_icon.svg'

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
          <img src={Icon}/>
          <span>Sim, desejo obter</span>
        </Button> : null
      }
    </ActionContainer>
  )
}