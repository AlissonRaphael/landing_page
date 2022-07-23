import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.main`
  border-top: 1px solid var(--primary);
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url(${Background});

  position: relative;
  z-index: 0;
`

export const OfferContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 7rem 14rem 7rem 14rem;
  @media (max-width: 768px) { padding: 7rem 4rem 4rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  max-width: 40rem;
  font-size: 2.7rem;
  @media (max-width: 768px) { font-size: 2rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // tablet props

  font-family: 'Lilita One', cursive;
  font-weight: 400;

  text-align: center;
  @media (max-width: 425px) { text-align: left; } // mobile props

  color: var(--white-text);

  span {
    color: var(--primary);
  }
`

export const Price = styled.h1`
  margin-bottom: 1.5rem;
  max-width: 40rem;
  text-align: center;
  align-self: center;

  font-size: 2.4rem;
  @media (max-width: 768px) { font-size: 1.8rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // mobile props

  color: var(--white-text);

  .original {
    text-decoration: line-through;
  }

  .discount {
    font-size: 5rem;
    color: var(--primary);
  }
`

export const RadialBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;

  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at bottom, var(--primary) 0%, transparent 70%);
  opacity: 0.1;

  animation: LIGHT 7s ease-in-out infinite;

  @keyframes LIGHT {
    0% { opacity: 0.1; }
    75% { opacity: 0.3; }
    100% { opacity: 0.1; }
  }
`

export const SquareBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;

  border: 1px solid var(--background-card-color);

  width: 100%;

  height: 45%;
  @media (max-width: 768px) { height: 50%; } // tablet props
  @media (max-width: 425px) { height: 60%; } // mobile props

  background-color: var(--background-side-color);
`
