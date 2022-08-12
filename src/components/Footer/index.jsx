import { ContainerStyle, FooterStyle } from './styles'
import Menu from '../Header/Menu'
import Logo from '../../assets/logo.png'


export default function Footer () {
  return (
    <ContainerStyle>
      <FooterStyle>
        <div>
          <img src={Logo}/>
          <span>Company Name 2022</span>
          <span>Todos os direitos reservados</span>
        </div>
        <div>
          <p>
            Os produtos e serviços vendidos neste site não devem ser interpretados como uma promessa ou garantia de resultados.
          </p>
          <p>
            Seu nível de sucesso em alcançar os resultados divulgados com o uso de nossos produtos e informações depende do tempo que você dedica ao programa, técnicas utilizadas, conhecimento e habilidades diferentes.
          </p>
          <p>
            Como esses fatores diferem entre cada indivíduo, não podemos garantir o sucesso ou o nível de resultado, nem somos responsáveis por qualquer de suas ações.
          </p>
          <p>
            Todas e quaisquer declarações prospectivas contidas neste site ou em qualquer um de nossos produtos destinam-se a expressar a nossa opinião sobre os resultados potenciais que algumas pessoas podem alcançar.
          </p>
          <Menu/>
        </div>
      </FooterStyle>
    </ContainerStyle>
  )
}
