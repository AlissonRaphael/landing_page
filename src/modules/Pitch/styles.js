import styled from 'styled-components'

export const PitchContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;

  padding: 4rem 14rem 4rem 14rem;
  @media (max-width: 1024px) { padding: 4rem 4rem 4rem 4rem; } // small desktop props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: relative;
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 40rem;
  text-align: center;
  align-self: center;

  font-size: 2.4rem;
  @media (max-width: 768px) { font-size: 1.8rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // mobile props

  color: var(--white-text);
`

export const Text = styled.div`
  width: 100%;
  max-width: 40rem;
  align-self: center;

  p {
    font-size: 1rem;
    line-height: 1.35rem;
    margin-bottom: 1.5rem;
    color: var(--gray-600-text);
    text-align: center;

    @media (max-width: 768px) { font-size: 1rem; } // tablet props
  }
`

export const Cards = styled.ul`
  padding: 0;
  display: grid;

  grid-template-columns: 50% 50%;
  @media (max-width: 768px) { grid-template-columns: 100%; } // tablet desktop
`

export const Card = styled.li`
  margin-bottom: 1.5rem;
  &:nth-child(2n+1) { margin-right: 0.75rem; }
  &:nth-child(2n+2) { margin-left: 0.75rem; }

   // tablet props
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    &:nth-child(2n+1) { margin-right: 0; }
    &:nth-child(2n+2) { margin-left: 0; }
  }

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 0.4rem;
  padding: 10%;
  @media (max-width: 768px) { padding: 5%; } // tablet props
  @media (max-width: 425px) { padding: 10%; } // mobile props

  display: grid;
  grid-template-columns: 25% 65%;
  gap: 10%;
  align-items: center;

  background-color: var(--background-side-color);
  position: relative;

  svg {
    position: absolute;
    top: -5px;
    right: 5%;
    height: 20px;
    width: 20px;

    margin: 0;
    padding: 0;
  }

  .ball {
    position: absolute;
    top: calc(50% - 7.5px);
    left: -7.5px;

    width: 15px;
    height: 15px;

    background-color: var(--background-side-color);
    transform: rotate(45deg);
  }

  .vertical, .horizontal {
    background-color: var(--background-card-color);
  }

  .vertical {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1px;
    height: 50%;
    background: linear-gradient(180deg, transparent, var(--primary));
  }

  .horizontal {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 1px;

    background: linear-gradient(90deg, transparent, var(--primary));
  }

  img {
    width: 100%;
    opacity: 0.7;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      margin-bottom: 0.5rem;
      color: var(--white-text);
      display: flex;
      align-items: end;

      .detail {
        margin-left: 5px;
        width: 5px;
        height: 5px;
        background-color: ${props => props.color ? props.color : 'white' };
      }
    }

    div {
      font-size: 0.7rem;
      line-height: 1rem;
      text-align: justify;
    }
  }

`