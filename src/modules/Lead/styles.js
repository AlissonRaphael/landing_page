import styled from 'styled-components'

export const LeadContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;

  padding: 7rem 14rem 7rem 14rem;
  @media (max-width: 1024px) { padding: 7rem 4rem 4rem 4rem; } // small desktop props
  @media (max-width: 425px) { padding: 4rem 2rem 4rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Article = styled.div`
  display: grid;
  grid-template-columns: 40% 2% 40%;
  @media (max-width: 768px) { grid-template-columns: 1% 2% 79%; } // tablet props
  @media (max-width: 425px) { grid-template-columns: 1% 90%; } // mobile props

  gap: 9%;

  align-items: center;
  justify-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 20%;
      z-index: -20;

      height: 100%;
      width: 60%;
      background-color: var(--background-card-light);
    }
  }

`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  max-width: 40rem;

  text-align: center;
  @media (max-width: 425px) { text-align: left; } // mobile props

  font-size: 2.4rem;
  @media (max-width: 768px) { font-size: 1.8rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // mobile props

  color: var(--text-main);
`

export const Text = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.35rem;
    margin-bottom: 1rem;
    color: var(--text-secondary);
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
    top: -70%;
    left: 0;
    z-index: -20;

    height: 210%;
    @media (max-width: 768px) { height: 27rem; } // tablet props

    width: 100%;
    @media (max-width: 768px) { width: 20rem; } // tablet props
    background-color: var(--background-card-light);
  }
`
