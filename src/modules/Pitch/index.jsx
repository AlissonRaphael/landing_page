import Icon1 from '../../assets/product/icon1.svg'
import Icon2 from '../../assets/product/icon2.svg'
import Icon3 from '../../assets/product/icon3.svg'
import Icon4 from '../../assets/product/icon4.svg'
import Icon5 from '../../assets/product/icon5.svg'
import Icon6 from '../../assets/product/icon6.svg'

const icons = {
  "Icon1": Icon1,
  "Icon2": Icon2,
  "Icon3": Icon3,
  "Icon4": Icon4,
  "Icon5": Icon5,
  "Icon6": Icon6,
}

import { PitchContainer, Title, Text, Cards, Card } from './styles'
import PlusSVG from '../../components/SVGs/Plus'

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'


export default function Pitch () {
  return (
    <PitchContainer>
      <Title>{parser(configuration.page_sections.pitch.title)}</Title>

      <Text>
        <p>
          {parser(configuration.page_sections.pitch.subtitle)}
        </p>
      </Text>

      <Cards>
        {
          configuration.page_sections.pitch.content.map(({ title, icon, color, plus, description }, index) => (
            <Card color={color} key={index}>
              { plus ? <PlusSVG/> : null }
              <i className="ball"></i>
              <i className="vertical"></i>
              <i className="horizontal"></i>
              <img src={icons[icon]}/>
              <div>
                <h3><span>{title}</span><div className="detail"></div></h3>
                <div>{description}</div>
              </div>
            </Card>
          ))
        }
      </Cards>
    </PitchContainer>
  )
}
