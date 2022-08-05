import { useState, useEffect } from 'react'

import { ActionContainer, Button } from './styles'
import Icon from '../../assets/button_icon.svg'

import configuration from '../../../configuration.json'

const HAS_DELAY = configuration.geral.button_action.hasDelay
const DELAY = configuration.geral.button_action.delay

export default function Action ({ isMain, showButton }) {

  return (
    <ActionContainer isMain={isMain}>
      { showButton ?
        <Button href="">
          <div>
            <img src={Icon}/>
          </div>
          <span>{configuration.geral.button_action.label}</span>
        </Button> : null
      }
    </ActionContainer>
  )
}