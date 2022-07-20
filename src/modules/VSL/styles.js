import styled from 'styled-components'

export const VSLContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  padding: 0 14rem;
  @media (max-width: 768px) { padding: 2rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 1rem 2rem; } // mobile props
`

export const Player = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 0.4rem;
  border: 1px solid var(--primary);
  height: 0;

  // tablet props
  @media (max-width: 768px) {
    border-radius: 0.3rem;
  }

  // mobile props
  @media (max-width: 425px) {
    border-radius: 0.2rem;
  }

  .film {
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    cursor: pointer;
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
      width: 150px;
      height: 150px;
      padding: 1rem;
      font-size: 0.8rem;
      color: var(--white-text);

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      position: relative;

      .circle-i, .circle-ii, .circle-iii {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #fff;

        box-shadow:
          inset 0 0 50px rgba(255,255,255,0.1), /* inner white */
          inset 20px 0 80px rgba(255,255,255,0.1),   /* inner left magenta short */
          inset -20px 0 80px rgba(255,255,255,0.1),  /* inner right cyan short */
          0 0 50px rgba(255,255,255,0.1),            /* outer white */
          -10px 0 80px rgba(255,255,255,0.1),        /* outer left magenta */
          10px 0 80px rgba(255,255,255,0.1);         /* outer right cyan */
      }

      .circle-i {
        border-radius: 42% 58% 26% 74% / 48% 50% 50% 52%;
        animation: FANCY 3s ease-in-out 0s infinite;
      }

      .circle-ii {
        border-radius: 42% 58% 26% 74% / 48% 50% 50% 52%;
        animation: FANCY 3s ease-in-out 0.3s infinite;
      }

      .circle-iii {
        border-radius: 42% 58% 26% 74% / 48% 50% 50% 52%;
        animation: FANCY 3s ease-in-out 0.4s infinite;
      }
    }

    @keyframes FANCY {
      0% { border-radius: 42% 58% 26% 74% / 48% 50% 50% 52%; transform: rotate(0deg) scale(1); }
      25% { border-radius: 53% 47% 42% 58% / 58% 45% 55% 42%; }
      50% { border-radius: 42% 58% 57% 43% / 47% 40% 60% 53%; transform: scale(1.05); }
      75% { border-radius: 56% 44% 62% 38% / 40% 50% 50% 60%; }
      100% { border-radius: 42% 58% 26% 74% / 48% 50% 50% 52%; transform: rotate(360deg) scale(1); }
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
    div {
      border-radius: inherit;
      iframe {
        border-radius: inherit;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-card-color);
        z-index: 1;
      }
    }

    .wistia_embed.wistia_async_t42ibex20d.wistia_embed_initialized {
      border-radius: inherit;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--background-card-color);
      z-index: 1;
    }
  }
`

export const ProgressionBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 8px;
  background-color: var(--primary);
  animation: PROGRESS ${props => props.duration}s cubic-bezier(0, 0.5, 0.5, 1);
  animation-play-state: ${props => props.isPlay ? 'running' : 'paused' };

  @keyframes PROGRESS {
    0% { width: 0; }
    100% { width: 100%; }
  }

`