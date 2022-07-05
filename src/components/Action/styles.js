import styled from 'styled-components'

export const ContainerStyle = styled.div`
  padding: 3rem;
  position: relative;

  // tablet props
  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  // mobile props
  @media (max-width: 425px) {
    padding: 1rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
    padding: 1.3rem 2.8rem;
    color: rgba(240,240,240,1);
    background-color: var(--primary);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    text-decoration: none;

    span {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: bold;
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
    }
  }
`
