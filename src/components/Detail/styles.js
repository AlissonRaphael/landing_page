import styled from 'styled-components'

export const ContainerStyle = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 2rem 10rem;
  @media (max-width: 768px) { padding: 2rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 2rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DetailStyles = styled.div`
  width: 1.5px;
  height: 80px;
  background: linear-gradient(180deg, var(--primary), transparent);
`

export const VerticalLineStyles = styled.div`
  position: relative;
  height: 100%;

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: var(--primary);
  }

  .line {
    position: absolute;
    top: 16px;
    left: 4px;
    width: 1px;
    height: 100%;
    background-color: var(--primary);
  }
`

export const HorizontalLineStyles = styled.div`
  position: relative;
  width: 100%;

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: var(--primary);
  }

  .line {
    position: absolute;
    top: 4px;
    left: 16px;
    width: 100%;
    height: 1px;
    background-color: var(--primary);
  }
`