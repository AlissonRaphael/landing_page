import { Container, RadialBackground, SquareBackground } from './styles'

export default function Main ({ children }) {
  return (
    <Container>
      { children }
      <RadialBackground/>
      <SquareBackground/>
    </Container>
  )
}