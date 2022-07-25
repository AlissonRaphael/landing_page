import { AutorityContainer, Title, Text, Article } from './styles'
import { VerticalLineDetail } from '../../components/Detail'


export default function Autority () {
  return (
    <AutorityContainer>
      <Article>
        <div className="photo"/>
        <div className="text">
          <Title>Antes de mais nada, preciso me apresentar...</Title>
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
        </div>
      </Article>
    </AutorityContainer>
  )
}