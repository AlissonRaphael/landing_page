import { useState, useEffect } from 'react'

import { HeaderContainer, HeaderStyle, Links, Burger } from './styles'
import Logo from '../../assets/logo.png'

export default function Header () {
  return (
    <HeaderContainer>
      <HeaderStyle>
        <img src={Logo}/>
        <Nav/>
      </HeaderStyle>
    </HeaderContainer>
  )
}

function Nav () {
  const [menu, setMenu] = useState('links')
  const [active, setActive] = useState(false)


  useEffect(() => {
    if (window.innerWidth <= 768)
      setMenu('burger')
  }, [])

  return (
    <>
      {menu === 'links' &&
      <Links>
        <ul>
          <li><a href="">Termos de Uso</a></li>
          <li><a href="">Políticas de Privacidade</a></li>
        </ul>
      </Links>}

      {menu=== 'burger' &&
      <Burger  className={active ? 'active' : ''} onTouchStart={() => setActive(!active)} >
        <div></div>
        <div></div>
        <div></div>
      </Burger>}
    </>
  )
}