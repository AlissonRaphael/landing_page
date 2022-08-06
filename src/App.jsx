import { useState } from 'react'

import { GlobalStyle } from './styles/global'

import Header from './components/Header'
import Main from './components/Main'
import Action from './components/Action'
import LandingPage from './components/LandingPage'

import Headline from './modules/Headline'
import VSL from './modules/VSL'
import SubHeadline from './modules/SubHeadline'


export default function App () {
  const [showButton, setShowButton] = useState(false)
  const [showPage, setShowPage] = useState(false)

  return (
    <>
      <Header/>

      <Main>
        <Headline/>
        <VSL setShowButton={setShowButton} setShowPage={setShowPage} />
        <SubHeadline/>
        <Action isMain={true} showButton={showButton}/>
      </Main>

      <LandingPage showPage={showPage}/>

      <GlobalStyle/>
    </>
  )
}
