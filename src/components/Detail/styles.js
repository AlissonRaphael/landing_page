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