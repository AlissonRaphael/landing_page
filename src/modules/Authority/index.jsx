import { AutorityContainer, Title, Text, Article } from './styles'
import { VerticalLineDetail } from '../../components/Detail'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'

export default function Autority () {
  return (
    <AutorityContainer>
      <Article>
        <div className="photo"/>
        <div className="text">
          <Title>{parser(configuration.page_sections.autority.title)}</Title>
          <Text>
            { configuration.page_sections.autority.texts.map(text => <p>{text}</p> ) }
          </Text>
          <VerticalLineDetail/>
        </div>
      </Article>
    </AutorityContainer>
  )
}