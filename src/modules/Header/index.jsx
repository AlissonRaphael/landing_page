import { useState, useEffect } from 'react'
import { HeaderStyle, NavStyle, Burger } from './styles'
import Logo from '../../assets/logo.png'

export default function Header () {
  return (
    <HeaderStyle>
      <NavStyle>
        <img src={Logo}/>
        <Nav/>
      </NavStyle>
    </HeaderStyle>
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
      {
        menu === 'links' ?
        <nav>
          <ul>
            <li><a href="">Termos de Uso</a></li>
            <li><a href="">Políticas de Privacidade</a></li>
          </ul>
        </nav> :

        <Burger 
          className={active ? 'active' : ''}
          onTouchStart={() => setActive(!active)}
        >
          <div></div>
          <div></div>
          <div></div>
        </Burger>

      }
    </>
  )
}