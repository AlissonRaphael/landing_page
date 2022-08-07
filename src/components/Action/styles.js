import styled from 'styled-components'
import Pattern from '../../assets/stripes.svg'

export const ActionContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  @media (max-width: 1024px) { padding: 2rem 4rem; } // small desktop props
  @media (max-width: 425px) { padding: 0; } // mobile props
  padding: ${props => props.isMain ? '2rem 10rem 6rem 10rem' : '0' };

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.a`
  border-radius: 0.25rem;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  background-color: var(--button-main);
  color: rgba(240,240,240,1);

  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;

  transition: background-color 0.2s ease-in-out;

  div {
    padding: 1rem 1.5rem;
    padding-right: 1rem;
    border-radius: 0.25rem;
    background-color: rgba(0,0,0,0.1);
  }

  img {
    width: 25px;
  }

  span {
    padding: 1rem 1.5rem;
    padding-left: 1rem;
  }

  :hover {
    background-image: url(${Pattern});
    background-size: 30px;
    background-position: 0%;
    color: var(--text-main);


    animation: PATTERN_ANIMATION 10s linear infinite;

    img {
      animation: HOVER_ICON 1s;
    }
  }

  @keyframes HOVER_ICON {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: rotate(-15deg); }
    50% { transform: scale(1.2) }
    75% { transform: rotate(15deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  @keyframes PATTERN_ANIMATION {
    0% { background-position: 0%; }
    100% { background-position: 100%; }
  }
`