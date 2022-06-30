import styled from 'styled-components'

export const HeaderStyle = styled.header`
  text-align: center;
  color: var(--white-text);

  span {
    color: var(--primary);
  }

  width: 100%;
  padding: 2rem;

  @media (min-width: 420px) {
    width: 70%;
  }
`

export const TitleStyle = styled.h1`
  font-size: 1.5rem;

  @media (min-width: 420px) {
    font-size: 2.5rem;
  }
`