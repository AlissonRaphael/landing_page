import styled from 'styled-components'

export const LeadContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 7rem 14rem 7rem 14rem;
  @media (max-width: 768px) { padding: 7rem 4rem 4rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Article = styled.div`
  display: grid;
  grid-template-columns: 40% 5% 40%;
  @media (max-width: 768px) { grid-template-columns: 5% 5% 80%; } // tablet props
  @media (max-width: 425px) { grid-template-columns: 8% 92%; } // mobile props

  gap: 5%;
  @media (max-width: 425px) { gap: 0%; } // mobile props

  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  max-width: 40rem;

  text-align: center;
  @media (max-width: 425px) { text-align: left; } // mobile props

  font-size: 2.4rem;
  @media (max-width: 768px) { font-size: 1.8rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // mobile props

  color: var(--white-text);
`

export const Text = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.35rem;
    margin-bottom: 1rem;
    color: var(--gray-600-text);
    text-align: justify;

    @media (max-width: 768px) { font-size: 1rem; } // tablet props
  }
`

export const Box = styled.div`
  height: 100%;
  width: 100%;

  @media (max-width: 425px) { display: none; } // mobile props

  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: -12rem;
    left: 0;
    z-index: -20;

    height: 34rem;
    @media (max-width: 768px) { height: 30rem; } // tablet props

    width: 22rem;
    background-color: var(--background-side-color);
  }
`
