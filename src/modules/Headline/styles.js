import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100%;
  max-width: 1440px;
  padding: 3rem;


  // tablet props
  @media (max-width: 768px) {
    padding: 2rem;
  }

  // mobile props
  @media (max-width: 425px) {
    padding: 1.5rem;
  }
`

export const TitleStyle = styled.h1`
  font-family: 'Lilita One', cursive;
  font-weight: 400;
  text-align: center;
  color: var(--white-text);
  font-size: 2.5rem;

  span {
    color: var(--primary);
  }


  // tablet props
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  // mobile props
  @media (max-width: 425px) {
    font-size: 1.5rem;
    text-align: left;
  }
`