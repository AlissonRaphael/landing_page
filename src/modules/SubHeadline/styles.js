import styled from 'styled-components'

export const SubHeadlineStyle = styled.div`
  max-width: 1440px;
  width: 100%;

  p {
    text-align: justify;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  padding: 2rem 6rem;
  @media (max-width: 768px) { padding: 2rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem; } // mobile props
`