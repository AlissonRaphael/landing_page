import styled from 'styled-components'

export const ContainerTitle = styled.div`
  position: absolute;
  top: auto;
  left: 100%;
`

export const Title = styled.div`
  width: 100%;
  height: 22px;

  display: inline-flex;
  align-items: center;

  background-color: var(--background-main-color);
  color: var(--gray-300-text);
  font-size: 0.9rem;

  position: relative;

  div.circle {
    position: absolute;
    top: 0px;
    left: -11px;

    width: 22px;
    height: 22px;

    border: 6px solid var(--background-main-color);
    border-radius: 50%;

    padding: 0;
    background-color: var(--gray-300-text);
  }

  span {
    margin-left: 11px;
    font-size: 0.9rem;
  }
`