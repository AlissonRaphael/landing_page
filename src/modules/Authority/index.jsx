import { AutorityContainer, Title, Text, Article, Photo,  } from './styles'
import { VerticalLineDetail } from '../../components/Detail'


export default function Autority () {
  return (
    <AutorityContainer>
      <Photo/>
      <Article>
        <Title>Antes de mais nada, deixe eu me apresentar...</Title>
        <Text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste, rem dolore in, eius quis nemo?
          </p>
          <p>
            Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste.
          </p>
        </Text>
        <VerticalLineDetail/>
      </Article>
    </AutorityContainer>
  )
}