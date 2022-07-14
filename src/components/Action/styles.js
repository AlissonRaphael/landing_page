import styled from 'styled-components'

export const ActionContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 2rem 10rem 6rem 10rem;
  @media (max-width: 768px) { padding: 2rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 1rem 2rem; } // mobile props

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.a`
  @media (max-width: 768px) { width: 100%; } // tablet props
  @media (max-width: 425px) { width: 100%; } // mobile props

  padding: 1.3rem 2.5rem;
  @media (max-width: 768px) { padding: 1.3rem 2.8rem; } // tablet props
  @media (max-width: 425px) { padding: 1rem 2rem; } // mobile props

  border-radius: 0.5rem;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  background-color: var(--primary);
  color: rgba(240,240,240,1);

  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;

  img {
    width: 25px;
    height: 25px;
    margin-right: 0.8rem;
    fill: #fff;
  }

  :hover {
    color: rgba(255,255,255,1);
    animation: BOUNCE 1s ease-in-out infinite;
  }

  @keyframes BOUNCE {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
`