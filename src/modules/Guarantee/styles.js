import styled from 'styled-components'

export const Container = styled.section`
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

  padding: 4rem;
  @media (max-width: 768px) { padding: 7rem 4rem 4rem 4rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem 3rem 2rem; } // mobile props
`

export const Grid = styled.div`
  border-radius: 1rem;
  padding: 2rem;

  display: grid;
  grid-template-areas: "a b c"
                       "d e f"
                       "g h i";
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
    height: 25px;
  }


  .d {
    grid-area: d;
    height: 25px;
  }

  .e {
    grid-area: e;
    width: 400px;
    height: 400px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      border-radius: 50%;
      width: 200px;
      height: 200px;

      background-color: black;
    }

  }

  .f {
    grid-area: f;
    height: 25px;
  }


  .g {
    grid-area: g;
    height: 25px;
  }

  .h {
    grid-area: h;
    width: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 30px;
      margin-right: 0.8rem;

      &.pix, &.paypal {
        height: 20px;
      }
    }
  }

  .i {
    grid-area: i;
    height: 25px;
  }

`