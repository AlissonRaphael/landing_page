import Icon1 from '../../assets/product/icon1.svg'
import Icon2 from '../../assets/product/icon2.svg'
import Icon3 from '../../assets/product/icon3.svg'
import Icon4 from '../../assets/product/icon4.svg'
import Icon5 from '../../assets/product/icon5.svg'
import Icon6 from '../../assets/product/icon6.svg'

import { PitchContainer, Title, Text, Cards, Card } from './styles'

const data = [
  {
    title: 'Lorem ipsum',
    icon: Icon1,
    color: '#25D366',
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon2,
    color: '#E4405F',
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon3,
    color: '#1877F2',
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon4,
    color: '#FF0000',
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon5,
    color: '#4285F4',
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon6,
    color: '#00B2FF',
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  }
]

export default function Pitch () {
  return (
    <PitchContainer>
      <Title>Através dessa solução, você poderá...</Title>

      <Text>
        <p>
          Reprehenderit distinctio consequuntur deleniti vero commodi quas facere ipsum dicta ad cupiditate voluptate quidem quasi iste
        </p>
      </Text>

      <Cards>
        {
          data.map(({ title, icon, color, description }, index) => (
            <Card color={color}>
              <i className="ball"></i>
              <i className="vertical"></i>
              <i className="horizontal"></i>
              <img src={icon}/>
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