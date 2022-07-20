import styled from 'styled-components'

export const SubHeadlineStyle = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  p {
    text-align: justify;
    font-size: 1rem;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  padding: 2rem 10rem;
  @media (max-width: 768px) { padding: 2rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 2rem 2rem; } // mobile props
`