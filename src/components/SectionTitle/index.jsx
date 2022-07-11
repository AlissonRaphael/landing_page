import { useState, useEffect } from 'react'

import { ContainerTitle, Title } from './styles'

export default function SectionTitle ({ children }) {
  const [desktop, setDesktop] = useState(true)

  useEffect(() => {
    if (window.innerWidth <= 768)
      setDesktop(false)
  }, [])

  if (!desktop)
    return null

  return (
    <ContainerTitle>
      <Title>
        <div className='circle'></div>
        <span>{ children }</span>
      </Title>
    </ContainerTitle>
  )
}