import { GlobalStyle } from './styles/global'

import Section from './components/Section'
import Action from './components/Action'

import Header from './modules/Header'
import Headline from './modules/Headline'
import VSL from './modules/VSL'
import Lead from './modules/Lead'
import History from './modules/History'
import Pitch from './modules/Pitch'
import Offer from './modules/Offer'
import Authority from './modules/Authority'
import Guarantee from './modules/Guarantee'
import FAQ from './modules/FAQ'
import Footer from './modules/Footer'

export default function App () {
  return (
    <>
      <Header/>

      <Section isMain={true}>
        <Headline/>
        <VSL/>
        <Action/>
      </Section>

      {/* <Section>
        <Lead/>
        <History/>
        <Pitch/>
      </Section>

      <Section>
        <Authority/>
      </Section>

      <Section>
        <Offer/>
        <Guarantee/>
        <Action/>
      </Section>

      <Section>
        <FAQ/>
      </Section>

      <Footer/> */}

      <Footer/>
      <GlobalStyle/>
    </>
  )
}
