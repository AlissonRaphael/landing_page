import SectionTitle from '../../components/SectionTitle'
import Image2 from '../../assets/image2.jpg'

import { LeadContainer, ImageSection, Article } from './styles'

export default function Lead () {
  return (
    <LeadContainer>
      <ImageSection>
        <img src={Image2}/>
      </ImageSection>

      <Article>
        <h1>Antes de tudo, precisamos ser sinceros neste momento</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste, rem dolore in, eius quis nemo?
          Quo modi cum repudiandae, autem assumenda earum, mollitia sequi doloremque dolor dolorem iusto nemo veritatis excepturi fugit.
        </p>
        <p>
          Possimus soluta atque aspernatur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p>
          Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste, rem dolore in, eius quis nemo?
        </p>
        <p>
          Possimus soluta atque aspernatur obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </Article>
      <SectionTitle>sobre</SectionTitle>
    </LeadContainer>
  )
}