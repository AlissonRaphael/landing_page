import styled from 'styled-components'

export const HistoryContainer = styled.div`
  width: 100%;

  padding: 4rem 4rem 0 4rem;
  @media (max-width: 768px) { padding: 4rem 3rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Article = styled.div`
  padding: 0 4rem 0 0;
  @media (max-width: 768px) { padding: 0 0 2rem 0; } // tablet props

  h1 {
    font-size: 2rem;
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