import { ContainerStyle, DetailStyles, VerticalLineStyles, HorizontalLineStyles } from './styles'

export function ContainerLineDetail () {
  return (
    <ContainerStyle>
      <DetailStyles/>
    </ContainerStyle>
  )
}

export function VerticalLineDetail ({height}) {
  return (
    <VerticalLineStyles height={height}>
      <div className="circle"></div>
      <div className="line"></div>
    </VerticalLineStyles>
  )
}

export function HorizontalLineDetail ({height}) {
  return (
    <HorizontalLineStyles height={height}>
      <div className="circle"></div>
      <div className="line"></div>
    </HorizontalLineStyles>
  )
}