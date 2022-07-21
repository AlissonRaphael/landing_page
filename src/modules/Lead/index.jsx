import { LeadContainer, Title, Article, LineContainer, Box, Text } from './styles'
import { VerticalLineDetail } from '../../components/Detail'

export default function Lead () {
  return (
    <LeadContainer>
      <Title>Antes de tudo, precisamos ser sinceros neste momento</Title>
      <Article>
        <Box/>
        <VerticalLineDetail/>
        <Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste, rem dolore in, eius quis nemo?
          </p>
          <p>
            Possimus soluta atque aspernatur obcaecati! Ipsum dolor sit amet.
          </p>
          <p>
            Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste.
          </p>
        </Text>
      </Article>
    </LeadContainer>
  )
}