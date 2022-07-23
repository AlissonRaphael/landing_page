import { Container, OfferContainer, Title, Price } from './styles'
import ActionButton from '../../components/Action'

export default function Offer () {
  return (
    <Container>
    <OfferContainer>
      <Title>Obtenha nossa solução com um desconte <span>imperdível</span></Title>
      <Price>
        <div className="original">de R$298,00</div>
        <div className="discount">por R$ 97,00</div>
      </Price>
      <ActionButton isMain={false}/>

    </OfferContainer>
    </Container>
  )
}