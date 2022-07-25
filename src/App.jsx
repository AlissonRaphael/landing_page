import { GlobalStyle } from './styles/global'

import Header from './components/Header'
import Main from './components/Main'
import Action from './components/Action'
import Page from './components/Page'
import { ContainerLineDetail } from './components/Detail'

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

export default function App () {
  return (
    <>
      <Header/>

      <Main>
        <Headline/>
        <VSL/>
        <SubHeadline/>
        <Action isMain={true}/>
      </Main>

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

      <GlobalStyle/>
    </>
  )
}
