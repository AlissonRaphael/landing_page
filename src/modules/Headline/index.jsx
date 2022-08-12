import { HeadlineContainer, TitleStyle, SubTitleStyle } from './styles'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'


export default function Headline () {
  return (
    <HeadlineContainer>
      <TitleStyle>
        {parser(configuration.page_sections.headline.title)}
      </TitleStyle>
      <SubTitleStyle>
        {configuration.page_sections.headline.subtitle}
      </SubTitleStyle>
    </HeadlineContainer>
  )
}
