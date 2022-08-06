import { ActionContainer, Button } from './styles'
import Icon from '../../assets/button_icon.svg'

import configuration from '../../../configuration.json'


export default function Action ({ isMain, showButton }) {

  return (
    <ActionContainer isMain={isMain}>
      { showButton ?
        <Button href={configuration.geral.button_action.link}>
          <div>
            <img src={Icon}/>
          </div>
          <span>{configuration.geral.button_action.label}</span>
        </Button> : null
      }
    </ActionContainer>
  )
}