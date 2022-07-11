import { useState, useEffect } from 'react'

import Arrow from './../../assets/arrow_down.svg'
import { PageContainer, CompContainer, MainContainer, SideContainer, PageTitle } from './styles'

export default function Page ({ children }) {
  const [desktop, setDesktop] = useState(true)


  useEffect(() => {
    if (window.innerWidth <= 768)
      setDesktop(false)
  }, [])

  return (
    <PageContainer>
      <CompContainer>
        <MainContainer>
          <PageTitle/>
          { children }
        </MainContainer>
        {
          desktop ?
          <SideContainer>
            <div><img src={Arrow}/></div>
          </SideContainer> :
          null
        }
      </CompContainer>
    </PageContainer>
  )
}