import styled from 'styled-components'

export const ContainerStyle = styled.div`
  padding: 4rem;
  position: relative;

  // tablet props
  @media (max-width: 768px) {
    padding: 3rem;
  }

  // mobile props
  @media (max-width: 425px) {
    padding: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(240,240,240,1);
    background-color: var(--primary);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    text-decoration: none;

    padding: 1.3rem 2.8rem;
    @media (max-width: 768px) { padding: 1.3rem 2.8rem; } // tablet props
    @media (max-width: 425px) { padding: 1rem 2rem; } // mobile props

    span {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
    }

    img {
      width: 25px;
      height: 25px;
      margin-right: 0.6rem;
      fill: #fff;
    }

    :hover {
      color: rgba(255,255,255,1);
      padding: 1.3rem 4rem;
      animation: BOUNCE 1s ease-in-out infinite;

      @keyframes BOUNCE {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); }
        100% { transform: scale(1); }
      }
    }
  }
`
