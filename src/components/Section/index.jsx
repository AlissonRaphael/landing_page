import { ContainerStyle } from './styles'

export default function Section ({ isMain, children }) {
  return (
    <ContainerStyle>
      { isMain && <div className="cover"></div> }
      { children }
    </ContainerStyle>
  )
}