import styled from 'styled-components'

export const HeadlineContainer = styled.div`
  margin-top: 3rem;
  @media (max-width: 768px) { margin-top: 4rem; } // tablet props
  @media (max-width: 425px) { margin-top: 3rem; } // mobile props

  max-width: 1440px;
  width: 100%;

  padding: 8rem;
  @media (max-width: 768px) { padding: 4rem 3rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem; } // mobile props
`

export const TitleStyle = styled.h1`
  font-size: 2.5rem;
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