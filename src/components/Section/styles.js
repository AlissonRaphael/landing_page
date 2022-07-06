import styled from 'styled-components'

export const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  .cover {
    background-color: var(--background-side-color);
    border-bottom: 1px solid var(--background-card-color);
    position: absolute;
    width: 100%;
    height: 42%;
    bottom: 0%;
    left: 0;
    z-index: -3;

    // tablet props
    @media (max-width: 768px) {
      height: 40%;
    }

    // mobile props
    @media (max-width: 425px) {
      height: 40%;
    }
  }
`
