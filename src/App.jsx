import { useState, useEffect } from 'react'

import { GlobalStyle } from './styles/global'

import Header from './components/Header'
import Main from './components/Main'
import Action from './components/Action'
import Page from './components/Page'
import { ContainerLineDetail } from './components/Detail'
import Footer from './components/Footer'

import Headline from './modules/Headline'
import VSL from './modules/VSL'
import SubHeadline from './modules/SubHeadline'
import Lead from './modules/Lead'
import History from './modules/History'
import Pitch from './modules/Pitch'
import Authority from './modules/Authority'
import Depositions from './modules/Depositions'
import Offer from './modules/Offer'
import Guarantee from './modules/Guarantee'
import FAQ from './modules/FAQ'

import configuration from '../configuration.json'

const HAS_DELAY = configuration.geral.landing_page.hasDelay
const DELAY = configuration.geral.landing_page.delay

export default function App () {
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    if (!HAS_DELAY)
      setShowPage(true)
  }, [])

  setInterval(() => {
    setShowPage(true)
  },DELAY*1000)

  return (
    <>
      <Header/>

      <Main>
        <Headline/>
        <VSL/>
        <SubHeadline/>
        <Action isMain={true}/>
      </Main>

      { showPage ?
        <>
          <Page>
            <ContainerLineDetail/>
            <Lead/>
            <History/>
            <Pitch/>
          </Page>

          <Page>
            <Authority/>
            <Depositions/>
          </Page>

          <Offer/>
          <Guarantee/>

          <Page>
            <FAQ/>
          </Page>

          <Footer/>
        </> :
        null
      }

      <GlobalStyle/>
    </>
  )
}
