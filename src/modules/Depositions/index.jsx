import { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap'

import { DepositionsContainer, Title, Grid, Deposition } from './styles'
import Quotes from '../../assets/quotes.svg'

import Avatar1 from '../../assets/avatar/avatar1.jpg'
import Avatar2 from '../../assets/avatar/avatar2.jpg'
import Avatar3 from '../../assets/avatar/avatar3.jpg'
import Avatar4 from '../../assets/avatar/avatar4.jpg'
import Avatar5 from '../../assets/avatar/avatar5.jpg'
import Avatar6 from '../../assets/avatar/avatar6.jpg'
import Avatar7 from '../../assets/avatar/avatar7.jpg'
import Avatar8 from '../../assets/avatar/avatar8.jpg'


const data = [
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar1,
    name: 'Lorem ipsum',
    bio: 'Quia vitae inventore quod'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar2,
    name: 'Lorem ipsum',
    bio: 'Similique ipsam'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar3,
    name: 'Lorem ipsum',
    bio: 'Doloribus voluptas'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar4,
    name: 'Lorem ipsum',
    bio: 'Similique ipsam'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar5,
    name: 'Lorem ipsum',
    bio: 'Ipsam nobis culpa'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar6,
    name: 'Lorem ipsum',
    bio: 'Praesentium similique'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar7,
    name: 'Lorem ipsum',
    bio: 'Laboriosam minima magni'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar8,
    name: 'Lorem ipsum',
    bio: 'Quia vitae inventore'
  },
  {
    deposition: 'Praesentium similique ipsam nobis culpa voluptatum perspiciatis quia vitae inventore quod, laboriosam minima magni corporis, dicta nisi labore doloribus voluptas amet est.',
    avatar: Avatar8,
    name: 'Lorem ipsum',
    bio: 'Dicta nisi labore'
  },
]

export default function Depositions () {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  return (
    <DepositionsContainer>
      <Title>Veja as palavras de quem já tem resultados</Title>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} enableTouch={true} ride="carousel" pause="hover">
        <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {
          data.map(({ deposition, avatar, name, bio }, index) => (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={index}
            >
              <Deposition>
                <img className="quotes" src={Quotes}/>
                <i className="vertical"></i>
                <div className="deposition">{deposition}</div>
                <div className="perfil">
                  <img className="avatar" src={avatar}/>
                  <div>
                    <h3>{name}</h3>
                    <p>{bio}</p>
                  </div>
                </div>
              </Deposition>
            </CarouselItem>
          ))
        }
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </DepositionsContainer>
  )
}
