import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  border-bottom: 1px solid var(--border-main);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 14px 28px;

  width: 100%;
  background-color: var(--background-main);
`

export const HeaderStyle = styled.div`
  margin: auto;

  max-width: 1440px;

  padding: 1.2rem;
  @media (max-width: 425px) { padding: 1rem; } // mobile props

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    @media (max-width: 768px) { width: 90px; } // tablet props
    @media (max-width: 425px) { width: 70px; } // mobile props
  }
`

export const Links = styled.nav`
  ul {
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    margin-bottom: 0;
  }

  li {
    list-style: none;

    margin-left: ${props => props.column ? 0 : '1rem'};;
    :first-child { margin-left: 0rem; }
  }

  a {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.8s ease;

    :hover {
      color: var(--text-main);
    }
  }
`
