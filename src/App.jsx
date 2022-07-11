import { GlobalStyle } from './styles/global'

import Header from './components/Header'
import Main from './components/Main'
import Action from './components/Action'
import Page from './components/Page'

import Headline from './modules/Headline'
import VSL from './modules/VSL'
import SubHeadline from './modules/SubHeadline'
import Lead from './modules/Lead'
import History from './modules/History'

export default function App () {
  return (
    <>
      <Header/>

      <Main>
        <Headline/>
        <VSL/>
        <SubHeadline/>
        <Action/>
      </Main>

      <Page>
        <Lead/>
        <History/>
      </Page>

      <GlobalStyle/>
    </>
  )
}
