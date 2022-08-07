import styled from 'styled-components'

export const HeadlineContainer = styled.div`
  margin-top: 3rem;
  @media (max-width: 768px) { margin-top: 4rem; } // tablet props
  @media (max-width: 425px) { margin-top: 3rem; } // mobile props

  max-width: 1440px;
  width: 100%;

  padding: 8rem 14rem;
  @media (max-width: 1024px) { padding: 4rem 3rem; } // small desktop props
  @media (max-width: 425px) { padding: 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitleStyle = styled.h1`
  font-size: 2.7rem;
  @media (max-width: 768px) { font-size: 2rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // tablet props

  font-family: 'Lilita One', cursive;
  font-weight: 400;

  text-align: center;
  @media (max-width: 425px) { text-align: left; } // mobile props

  color: var(--text-main);

  span {
    color: var(--primary);
  }
`

export const SubTitleStyle = styled.h2`
  margin-top: 1.5rem;

  max-width: 780px;

  font-size: 1rem;
  @media (max-width: 768px) { font-size: 1.1rem; } // tablet props
  @media (max-width: 425px) { font-size: 0.8rem; } // tablet props

  text-align: center;
  @media (max-width: 425px) { text-align: left; } // mobile props

  color: var(--text-secondary);

  span {
    color: var(--primary);
  }
`