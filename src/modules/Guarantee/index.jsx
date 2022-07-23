import Money from '../../assets/guarantee/money.svg'
import Arrow from '../../assets/guarantee/arrow.svg'
import Credit from '../../assets/guarantee/credit.svg'
import Visa from '../../assets/guarantee/visa.svg'
import Mastercard from '../../assets/guarantee/mastercard.svg'
import Paypal from '../../assets/guarantee/paypal.svg'
import Pix from '../../assets/guarantee/pix.svg'
import { Container, GuaranteeContainer, Grid } from './styles'

import Icon1 from '../../assets/product/icon1.svg'
import Icon2 from '../../assets/product/icon2.svg'
import Icon3 from '../../assets/product/icon3.svg'
import Icon4 from '../../assets/product/icon4.svg'
import Icon5 from '../../assets/product/icon5.svg'
import Icon6 from '../../assets/product/icon6.svg'

export default function Guarantee () {
  return (
    <Container>
      <GuaranteeContainer>
        <Grid>
          <img className="a" src={Money} />
          <div className="b">Compra segura</div>
          <img className="c" src={Arrow} />

          <img className="d"/>
          <div className="e">
            <div></div>
          </div>
          <img className="f" />

          <img className="g" src={Arrow} />
          <div className="h">
            <img src={Visa}/>
            <img src={Mastercard}/>
            <img className="paypal" src={Paypal}/>
            <img className="pix" src={Pix}/>
          </div>
          <img className="i" src={Money} />
        </Grid>
      </GuaranteeContainer>
    </Container>
  )
}