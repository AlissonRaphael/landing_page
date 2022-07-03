import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100%;
  padding: 1.2rem;
  border-bottom: 1px solid var(--background-card-color);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px;

  // mobile props
  @media (max-width: 425px) {
    padding: 0.8rem;
  }
`

export const NavStyle = styled.header`
  margin: auto;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: space-between;


  img {
    width: 100px;

    // tablet props
    @media (max-width: 768px) {
      width: 90px;
    }

    // mobile props
    @media (max-width: 425px) {
      width: 70px;
    }
  }

  nav {
    ul {
      display: flex;
    }

    li {
      list-style: none;
      margin-left: 1rem;

      :first-child {
        margin-left: 0rem;
      }
    }

    a {
      font-size: 0.8rem;
      color: var(--gray-600-text);
      text-decoration: none;
      transition: all 0.8s ease;

      :hover {
        color: var(--white-text);
      }
    }
  }

`

export const Burger = styled.div`
  height: 16px;
  width: 20px;

  div {
    width: 20px;
    height: 3px;
    margin-bottom: 4px;
    background-color: var(--gray-600-text);

    :last-child {
      margin-bottom: 0;
    }

    transition: all 0.3s ease;
  }


  &.active {
    div {
      width: 20px;
      height: 3px;
      margin-bottom: 4px;
      background-color: #fff;
      opacity: 0;

      :first-child {
        transform: rotate(45deg) translate(5px, 5px);
        opacity: 1;
      }

      :last-child {
        transform: rotate(-45deg) translate(5px, -5px);
        opacity: 1;
      }
    }
  }
`