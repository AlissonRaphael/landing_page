import styled from 'styled-components'


export const Container = styled.section`
  margin: 0rem 0rem 7rem 0rem;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  background: linear-gradient(110deg, var(--primary) 0%, var(--primary) 50%, var(--primary-darken) 50%, var(--primary-darken) 100%);
  background-color: var(--primary);
`

export const GuaranteeContainer = styled.div`
  margin: 2rem 0 2rem 0;
  border-radius: 2rem;

  max-width: 1240px;
  width: 100%;

  padding: 7rem 4rem;
  @media (max-width: 1024px) { padding: 7rem 4rem 7rem 4rem; } // small desktop props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props
`

export const Grid = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  @media (max-width: 425px) { padding: 1rem; } // mobile props

  display: grid;
  grid-template-areas: "a b c"
                       "d d d"
                       "e f g";
  grid-template-columns: 4% 92% 4%;
  grid-template-rows: 10% 80% 10%;

  background-color: var(--primary);
  box-shadow: rgba(17, 17, 26, 0.3) 0px 8px 24px, rgba(17, 17, 26, 0.3) 0px 16px 56px, rgba(17, 17, 26, 0.2) 0px 24px 80px;

  align-items: center;
  justify-items: center;

  .a {
    grid-area: a;
    height: 25px;
  }

  .b {
    grid-area: b;
    height: 25px;

    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    color: black;
  }

  .c {
    grid-area: c;
    height: 20px;
  }

  .d {
    grid-area: d;
    width: 100%;
    height: 100%;
    padding: 5rem;
    @media (max-width: 768px) { padding: 2rem; } // tablet props
    @media (max-width: 425px) { padding: 0rem; } // mobile props


    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 768px) { grid-template-columns: 1fr; } // tablet props
    grid-template-rows: 1fr;
    @media (max-width: 768px) { grid-template-rows: 1fr 1fr 1fr; } // tablet props
    gap: 5%;
  
    align-items: center;
    justify-items: center;
    justify-content: center;

    .security, .privacy {
      width: 100%;
      max-width: 160px;
    }

    .guarantee {
      width: 100%;
      height: 100%;
      max-width: 250px;
      position: relative;

      img {
        width: 100%;
      }

      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        color: black;
        font-size: 2.2rem;
        @media (max-width: 1024px) { font-size: 1.5rem; } // small desktop props
        @media (max-width: 768px) { font-size: 2.2rem; } // tablet props
        font-weight: bold;
      }
    }
  }

  .e {
    grid-area: e;
    height: 20px;
    transform: rotate(180deg);
  }

  .f {
    grid-area: f;
    width: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 30px;
      margin-right: 0.8rem;

      &.pix, &.paypal {
        height: 17px;
      }
    }
  }

  .g {
    grid-area: g;
    height: 25px;
  }

`