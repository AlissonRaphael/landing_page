import { useState, useEffect } from 'react'

import { HeaderContainer, HeaderStyle } from './styles'
import Menu from './Menu'
import Logo from '../../assets/logo.png'


export default function Header () {
  const [showMenu, setShowMenu] = useState(true)

  useEffect(() => {
    if (window.innerWidth <= 425)
      setShowMenu(false)
  }, [])

  return (
    <HeaderContainer>
      <HeaderStyle>
        <img src={Logo}/>
        { showMenu ? <Menu/> : null }
      </HeaderStyle>
    </HeaderContainer>
  )
}
