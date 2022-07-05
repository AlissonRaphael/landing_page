import styled from 'styled-components'

export const ContainerStyle = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 6rem;


  // tablet props
  @media (max-width: 768px) {
    padding: 0 4rem;
  }

  // mobile props
  @media (max-width: 425px) {
    padding: 0 1.5rem;
  }

`

export const Player = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 0.5rem;
  border: 2px solid var(--primary);
  height: 0;

  // tablet props
  @media (max-width: 768px) {
    border-radius: 0.4rem;
  }

  // mobile props
  @media (max-width: 425px) {
    border-radius: 0.3rem;
  }

  .film {
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      font-size: 0.8rem;
      color: var(--white-text);
      background-color: var(--primary);
      border-radius: 0.3rem;
      padding: 1rem;
      opacity: 0.9;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

    }

    svg {
      border-radius: inherit;
      width: 60px;
      height: 47px;
    }

    @-webkit-keyframes BLINK {
      0% { opacity: 0; }
      33% { opacity: 1; }
      66% { opacity: 1; }
      100% { opacity: 0; }
    }

    @keyframes BLINK {
      0% { opacity: 0; }
      33% { opacity: 1; }
      66% { opacity: 1; }
      100% { opacity: 0; }
    }

    .blink_1 {
      -webkit-animation: BLINK 1s infinite;
      animation: BLINK 1s infinite;
      opacity: 0;
    }

    .blink_2 {
      -webkit-animation: BLINK 1s infinite .15s;
      animation: BLINK 1s infinite .15s;
      opacity: 0;
    }

    .blink_3 {
      -webkit-animation: BLINK 1s infinite .3s;
      animation: BLINK 1s infinite .3s;
      opacity: 0;
    }

    .svg-color {
      fill: #FFFFFF;
    }
  }

  .thumbnail {
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    filter: brightness(0.5);
  }

  .video {
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-card-color);
    z-index: 1;
  }
`