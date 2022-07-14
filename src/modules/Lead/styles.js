import styled from 'styled-components'

export const LeadContainer = styled.div`
  /* margin-top: 2rem;
  @media (max-width: 768px) { margin-top: 4rem; } // tablet props
  @media (max-width: 425px) { margin-top: 3rem; } // mobile props */

  width: 100%;

  padding: 4rem 4rem 0 4rem;
  @media (max-width: 768px) { padding: 4rem 3rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem; } // mobile props

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const ImageSection = styled.div`
  margin-right: 8rem;
  min-width: 35%;

  position: relative;

  img {
    position: absolute;
    top: -25rem;
    left: -4rem;

    height: 38rem;
    width: 30rem;
    background-color: var(--gray-300-text);
  }
`


export const Article = styled.div`
  padding: 0 4rem 0 0;
  @media (max-width: 768px) { padding: 0 0 2rem 0; } // tablet props

  h1 {
    font-size: 2rem;
    text-align: right;
    color: var(--white-text);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: justify;
    color: var(--gray-600-text);
    @media (max-width: 768px) { font-size: 1rem; } // tablet props
  }
`
