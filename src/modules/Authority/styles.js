import styled from 'styled-components'

import Man from '../../assets/man.jpg'


export const AutorityContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 7rem 14rem 7rem 14rem;
  @media (max-width: 768px) { padding: 7rem 4rem 4rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    height: 60%;
    z-index: -20;
    background-color: var(--background-side-color);
  }
`

export const Article = styled.div`
  margin-top: 16rem;
  max-width: 30rem;
  height: 35rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Photo = styled.div`
  margin-right: 4rem;
  width: 100%;
  height: 30rem;
  max-width: 300px;

  border: 4px solid var(--primary);
  background-image: url(${Man});
  background-size: cover;
  background-position: center;
`
