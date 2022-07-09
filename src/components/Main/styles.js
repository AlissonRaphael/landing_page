import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  // mobile props
  @media (max-width: 425px) { height: 100vh; }
`

export const SquareBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;

  border: 1px solid var(--background-card-color);

  width: 100%;

  height: 45%;
  @media (max-width: 768px) { height: 50%; } // tablet props
  @media (max-width: 425px) { height: 60%; } // mobile props

  background-color: var(--background-side-color);
`