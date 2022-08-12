import Money from '../../assets/guarantee/money.svg'
import Arrow from '../../assets/guarantee/arrow.svg'
import Visa from '../../assets/guarantee/visa.svg'
import Mastercard from '../../assets/guarantee/mastercard.svg'
import Paypal from '../../assets/guarantee/paypal.svg'
import Pix from '../../assets/guarantee/pix.svg'

import GuaranteeLogo from '../../assets/guarantee/guarantee.svg'
import PrivacyLogo from '../../assets/guarantee/privacy.svg'
import SecurityLogo from '../../assets/guarantee/security.svg'


import { Container, GuaranteeContainer, Grid } from './styles'


export default function Guarantee () {
  return (
    <Container>
      <GuaranteeContainer>
        <Grid>
          <img className="a" src={Money} />
          <div className="b">Compra segura</div>
          <img className="c" src={Arrow} />

          <div className="d">
            <img className="security" src={SecurityLogo}/>
            <div className="guarantee">
              <img  src={GuaranteeLogo}/>
              <span>07 dias</span>
            </div>
            <img className="privacy" src={PrivacyLogo}/>
          </div>

          <img className="e" src={Arrow} />
          <div className="f">
            <img src={Visa}/>
            <img src={Mastercard}/>
            <img className="paypal" src={Paypal}/>
            <img className="pix" src={Pix}/>
          </div>
          <img className="g" src={Money} />
        </Grid>
      </GuaranteeContainer>
    </Container>
  )
}
