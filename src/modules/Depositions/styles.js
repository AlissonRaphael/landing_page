import styled from 'styled-components'

export const DepositionsContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;

  padding: 7rem 14rem 7rem 14rem;
  @media (max-width: 1024px) { padding: 7rem 4rem 7rem 4rem; } // small desktop props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  .carousel.slide {

    .carousel-indicators {
      margin: 0;
      button {
        background-color: var(--primary);
      }
    }

    .carousel-control-prev, .carousel-control-next {
      width: 5%;
      @media (max-width: 425px) { width: 9%; } // mobile props
    }

    .carousel-control-next {
      right: -15px;
    }

    .carousel-control-prev {
      left: -15px;
    }

    .carousel-inner {}

    .carousel-item {
      padding: 1rem 3rem 2rem 3rem;
      @media (max-width: 425px) { padding: 1rem 1rem 3rem 1rem; } // mobile props

    }
  }
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  max-width: 40rem;
  text-align: center;
  align-self: center;

  font-size: 2.4rem;
  @media (max-width: 768px) { font-size: 1.8rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // mobile props

  color: var(--white-text);
`

export const Deposition = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 0.4rem;
  padding: 2.5rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--background-side-color);
  position: relative;

  .deposition {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.35rem;
    text-align: justify;
    color: var(--gray-600-text);
  }

  .perfil {
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 2px solid var(--primary);
    }

    h3 {
      margin-bottom: 0;
      font-size: 1rem;
      font-weight: bold;
    }

    p {
      margin-bottom: 0;
      font-size: 0.8rem;
    }
  }

  svg {
    position: absolute;
    top: -25px;
    left: 15px;
    height: 50px;
    width: 50px;

    margin: 0;
    padding: 0;
  }

  .vertical {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(0deg, transparent, var(--primary));
  }
`
