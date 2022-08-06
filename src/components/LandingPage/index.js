import Page from '../Page'
import { ContainerLineDetail } from '../Detail'
import Footer from '../Footer'

import Lead from '../../modules/Lead'
import History from '../../modules/History'
import Pitch from '../../modules/Pitch'
import Authority from '../../modules/Authority'
import Depositions from '../../modules/Depositions'
import Offer from '../../modules/Offer'
import Guarantee from '../../modules/Guarantee'
import FAQ from '../../modules/FAQ'


export default function LandingPage ({ showPage }) {
  if (!showPage)
    return null

  return <>
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
  </>
}
