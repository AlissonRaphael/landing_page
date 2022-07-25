import styled from 'styled-components'

import Man from '../../assets/man.jpg'


export const AutorityContainer = styled.div`
  margin: 3rem 0;
  max-width: 1440px;
  width: 100%;

  padding: 7rem 14rem 7rem 14rem;
  @media (max-width: 1024px) { padding: 4rem 4rem 4rem 4rem; } // small desktop props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: -0%;
    left: 30%;
    @media (max-width: 768px) { left: 20%; } // tablet props

    width: 40%;
    @media (max-width: 768px) { width: 60%; } // tablet props

    height: 100%;
    z-index: -20;
    background-color: var(--background-side-color);
  }
`

export const Article = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 768px) { grid-template-columns: 100%; } // tablet props
  align-items: center;
  justify-content: center;

  .photo {
    @media (max-width: 768px) { margin: auto; margin-bottom: 3rem; } // tablet props

    min-height: 35rem;
    @media (max-width: 768px) { min-height: 25rem; } // tablet props

    width: 80%;
    @media (max-width: 768px) { width: 60%; } // tablet props
    @media (max-width: 425px) { width: 100%; } // mobile props

    background-image: url(${Man});
    background-size: cover;
    background-position: center;
    border: 4px solid var(--primary);
  }

  .text {
    height: 80%;
    @media (max-width: 768px) { min-height: 25rem; } // tablet props
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  width: 100%;
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