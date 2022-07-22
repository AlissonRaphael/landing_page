import styled from 'styled-components'

export const PitchContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 7rem 14rem 14rem 14rem;
  @media (max-width: 768px) { padding: 7rem 4rem 4rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: relative;
`

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  max-width: 40rem;
  text-align: center;
  align-self: center;

  font-size: 2.4rem;
  @media (max-width: 768px) { font-size: 1.8rem; } // tablet props
  @media (max-width: 425px) { font-size: 1.5rem; } // mobile props

  color: var(--white-text);
`

export const Text = styled.div`
  max-width: 60%;
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
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 4%;
`

export const Card = styled.li`
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 0.4rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;

  background-color: var(--background-side-color);
  position: relative;

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
    width: 3px;
    height: 15px;
  }

  .horizontal {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 3px;
  }

  img {
    height: 4.5rem;
    padding-right: 2rem;
    opacity: 0.7;
  }

  div {
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