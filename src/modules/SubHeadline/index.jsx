import { SubHeadlineStyle } from './styles'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'

export default function Headline () {
  return (
    <SubHeadlineStyle>
      {parser(configuration.page_sections.sub_headline)}
    </SubHeadlineStyle>
  )
}