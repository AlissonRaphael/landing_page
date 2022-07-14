import styled from 'styled-components'

import Image1 from '../../assets/image1.jpg'

export const PageContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
`

export const CompContainer = styled.div`
  max-width: 1440px;
  width: 100%;

  /* padding: 8rem;
  @media (max-width: 768px) { padding: 4rem 3rem; } // tablet props
  @media (max-width: 425px) { padding: 3rem 2rem; } // mobile props */

  display: grid;
  grid-template-columns: 80% 20%;
  @media (max-width: 768px) { display: flex } // tablet props

`

export const MainContainer = styled.aside`
  padding-top: 10rem;
  width: 100%;
  height: 100%;

`

export const SideContainer = styled.aside`
  border-left: 1px solid var(--gray-200-text);

  width: 100%;
  height: 100%;

  div {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 5rem;
    margin: 10rem 2rem;
  
    img {
      width: 50%;
    }
  }
`

export const PageTitle = styled.div`
  margin-right: 10rem;
  width: 90%;

  height: 20rem;
  background-image: url(${Image1});
  background-size: cover;
`