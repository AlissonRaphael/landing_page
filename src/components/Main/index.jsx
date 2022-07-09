import { Container, SquareBackground } from './styles'

export default function Main ({ children }) {
  return (
    <Container>
      { children }
      <SquareBackground/>
    </Container>
  )
}