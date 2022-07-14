import styled from 'styled-components'

export const PitchContainer = styled.div`
  width: 100%;

  padding: 4rem;
  @media (max-width: 768px) { padding: 4rem 3rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Article = styled.div`
  h1 {
    font-size: 2rem;
    color: var(--white-text);
    margin-bottom: 2rem;
  }

  ul {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 425px) { grid-template-columns: 1fr; } // mobile props
  }
`

export const Card = styled.li`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 0.4rem;
  padding: 2.5rem;
  display: flex;

  background-color: var(--background-side-color);

  img {
    height: 5rem;
    padding-right: 1.5rem;
    opacity: 0.7;
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 0.5rem;
      color: var(--white-text);
    }

    div {
      font-size: 0.7rem;
      text-align: justify;
    }
  }

`