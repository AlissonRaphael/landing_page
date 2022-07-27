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

const avatars = {
  "Avatar1": Avatar1,
  "Avatar2": Avatar2,
  "Avatar3": Avatar3,
  "Avatar4": Avatar4,
  "Avatar5": Avatar5,
  "Avatar6": Avatar6,
  "Avatar7": Avatar7,
  "Avatar8": Avatar8
}

import parser from '../../helpers/parser'
import configuration from '../../../configuration.json'

const data = configuration.page_sections.depositions.content


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
      <Title>{parser(configuration.page_sections.depositions.title)}</Title>
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
                  <img className="avatar" src={avatars[avatar]}/>
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
