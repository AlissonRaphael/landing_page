import SectionTitle from '../../components/SectionTitle'
import Icon1 from '../../assets/product/icon1.svg'
import Icon2 from '../../assets/product/icon2.svg'
import Icon3 from '../../assets/product/icon3.svg'
import Icon4 from '../../assets/product/icon4.svg'
import Icon5 from '../../assets/product/icon5.svg'
import Icon6 from '../../assets/product/icon6.svg'
import { PitchContainer, Article, Card } from './styles'

const data = [
  {
    title: 'Lorem ipsum',
    icon: Icon1,
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon2,
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon3,
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon4,
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon5,
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  },
  {
    title: 'Ipsum dolor',
    icon: Icon6,
    description: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.'
  }
]

export default function Pitch () {
  return (
    <PitchContainer>
      <Article>
        <h1>Com isso mãos, você poderá...</h1>
        <ul>
          {
            data.map(({ title, icon, description }) => (
              <Card>
                <img src={icon}/>
                <div>
                  <h3>{title}</h3>
                  <div>{description}</div>
                </div>
              </Card>
            ))
          }
        </ul>
      </Article>
      <SectionTitle>produto</SectionTitle>
    </PitchContainer>
  )
}