import styled from 'styled-components'

import Down from '../../assets/down.svg'


export const FAQContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 7rem 14rem 7rem 14rem;
  @media (max-width: 1024px) { padding: 7rem 4rem 7rem 4rem; } // small props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
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

export const Grid = styled.div`
  width: 100%;

  .accordion {
    width: 100%;
    background-color: transparent;

    .accordion-item {
      background-color: transparent;
      border: 1px solid var(--border-main);

      .accordion-button {
        background-color: var(--background-card-light);
        color: var(--text-main);

        ::after {
          background-image: url(${Down});
        }
      }

      .accordion-button.collapsed {
        background-color: var(--background-card-light);
        color: var(--text-secondary);

        ::after {
          background-image: url(${Down});
        }
      }
    }
  }
`