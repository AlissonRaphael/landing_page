import styled from 'styled-components'

export const ContainerStyle = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-card-light);
    border-bottom: 1px solid var(--border-main);
`

export const FooterStyle = styled.footer`
    width: 100%;
    max-width: 1440px;
    padding: 6rem;

    display: flex;
    flex-direction: row;

    // tablet props
    @media (max-width: 768px) {
      padding: 4rem;
      display: flex;
      flex-direction: column;
    }

    // mobile props
    @media (max-width: 425px) {
      padding: 2rem;
    }

    div:first-child {
      display: flex;
      flex-direction: column;
      margin: 0 4rem 0 0;
      @media (max-width: 768px) { margin: 0 0 1rem 0; } // tablet props

      img {
        width: 250px;
        margin-bottom: 1rem;
        @media (max-width: 768px) { width: 160px; } // tablet props
      }

      span {
        text-align: left;
        margin-bottom: 0;
      }
    }



    p, span {
      text-align: justify;
      margin-bottom: 1.5rem;
      font-size: 0.8rem;

      @media (max-width: 768px) { font-size: 0.7rem; margin-bottom: 1rem;  } // tablet props

      &:last-child {
        margin-bottom: 0;
      }
    }
`
