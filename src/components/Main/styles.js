import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) { height: 100vh; } // mobile props

  background-image: url(${Background});

  position: relative;
  z-index: 0;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  border: 1px solid var(--border-main);

  width: 100%;

  height: 45%;
  @media (max-width: 1024px) { height: 38%; } // tablet props
  @media (max-width: 768px) { height: 43%; } // tablet props
  @media (max-width: 425px) { height: 51%; } // mobile props

  background-color: var(--background-card-light);
`