import styled from 'styled-components'

export const HistoryContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 7rem 14rem 4rem 14rem;
  @media (max-width: 1024px) { padding: 7rem 4rem 4rem 4rem; } // small props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: relative;
`

export const Article = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  max-width: 40rem;
  text-align: left;

  font-size: 2.4rem;
  @media (max-width: 768px) { font-size: 1.8rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // mobile props

  color: var(--white-text);
`

export const Text = styled.div`
  &.start {
    margin: 4rem 0 0 0;
    @media (max-width: 768px) { margin: 2rem 0 0 0 } // tablet props

    max-width: 100%;
    @media (max-width: 768px) { max-width: 100%; } // tablet props

    align-self: start;
    position: relative;
  }

  &.end {
    margin: 0 0 4rem 0;
    @media (max-width: 768px) { margin: 0 0 2rem 0 } // tablet props

    max-width: 70%;
    @media (max-width: 768px) { max-width: 100%; } // tablet props

    align-self: end;
    position: relative;

    // mobile props
    @media (min-width: 426px) {
      ::before {
        content: '';
        position: absolute;
        top: -25%;
        @media (max-width: 768px) { top: -20%; } // tablet props

        left: -20%;
        @media (max-width: 768px) { left: 15%; } // tablet props

        width: 100%;
        @media (max-width: 768px) { width: 70%; } // tablet props

        height: 300%;
        @media (max-width: 768px) { height: 300%; } // tablet props
        z-index: -20;

        background-color: var(--background-side-color);
      }
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.35rem;
    margin-bottom: 1rem;
    color: var(--gray-600-text);
    text-align: justify;

    @media (max-width: 768px) { font-size: 1rem; } // tablet props

    :last-child {
      margin-bottom: 0;
    }
  }
`

export const Links = styled.nav`
  margin-top: 1rem;
  width: 100%;

  ul { display: flex; }

  li {
    list-style: none;

    margin-left: 1rem;
    :first-child { margin-left: 0rem; }
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    color: var(--primary);
    text-decoration: none;

    span {
      padding-bottom: 0.2rem;
      border-bottom: 1px solid var(--primary);
      transition: all 0.3s ease;
      margin-right: 0.5rem;
    }

    img {
      height: 1rem;
    }

    :hover {
      span {
        padding-bottom: 0.4rem;
        margin-right: 1rem;
      }

      img {
        height: 1rem;
      }
    }
  }
`

export const LineContainer = styled.div`
  width: 100%;
  max-width: 70%;
  @media (max-width: 768px) { max-width: 100%; } // tablet props

  align-self: end;
`