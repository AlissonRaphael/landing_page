import { ContainerStyle } from './styles'
import Download from '../../assets/download.svg'

export default function Action () {
  return (
    <ContainerStyle>
      <div className="cover"></div>
      <a href="">
        <img src={Download}/>
        <span>Baixar agora</span>
      </a>
    </ContainerStyle>
  )
}