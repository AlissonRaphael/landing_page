import { LeadContainer, Title, Article, Box, Text } from './styles'
import { VerticalLineDetail } from '../../components/Detail'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'

export default function Lead () {
  return (
    <LeadContainer>
      <Title>{parser(configuration.page_sections.lead.title)}</Title>
      <Article>
        <Box/>
        <VerticalLineDetail/>
        <Text>
          { configuration.page_sections.lead.texts.map(text => <p>{text}</p> ) }
        </Text>
      </Article>
    </LeadContainer>
  )
}