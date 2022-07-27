import { Container, OfferContainer, Title, Price } from './styles'
import ActionButton from '../../components/Action'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'


export default function Offer () {
  return (
    <Container>
    <OfferContainer>
      <Title>{parser(configuration.page_sections.offer.title)}</Title>
      <Price>
        <div className="original">{configuration.page_sections.offer.original_price}</div>
        <div className="discount">{configuration.page_sections.offer.price_with_discount}</div>
      </Price>
      <ActionButton isMain={false}/>

    </OfferContainer>
    </Container>
  )
}