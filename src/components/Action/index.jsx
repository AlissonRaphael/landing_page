import { useState, useEffect } from 'react'

import { ActionContainer, Button } from './styles'
import Icon from '../../assets/button_icon.svg'

const DELAY_BUTTOM = process.env.DELAY_BUTTON

export default function Action ({ isMain }) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (!isMain)
      setShowButton(true)
  }, [])

  setInterval(() => {
    setShowButton(true)
  },DELAY_BUTTOM*1000)

  return (
    <ActionContainer isMain={isMain}>
      { showButton ?
        <Button href="">
          <div>
            <img src={Icon}/>
          </div>
          <span>Sim, desejo obter</span>
        </Button> : null
      }
    </ActionContainer>
  )
}