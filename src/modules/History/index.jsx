import ArrowRight from '../../assets/arrow_right.svg'
import { HistoryContainer, Title, Article, LineContainer, Text, Links } from './styles'
import { HorizontalLineDetail } from '../../components/Detail'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'

export default function History () {
  return (
    <HistoryContainer>
      <Title>{parser(configuration.page_sections.history.title)}</Title>
      <Article>
        <Text className='end'>
          { configuration.page_sections.history.texts1.map(text => <p>{text}</p>) }
        </Text>
        <LineContainer>
          <HorizontalLineDetail/>
        </LineContainer>
        <Text className='start'>
          { configuration.page_sections.history.texts2.map(text => <p>{text}</p>) }
          <Links>
            <ul>
              <li>
                <a className="primary" href={configuration.page_sections.history.link.url}>
                  <span>{configuration.page_sections.history.link.label}</span> 
                  <img src={ArrowRight}/>
                </a>
                </li>
            </ul>
          </Links>
        </Text>

      </Article>
    </HistoryContainer>
  )
}
