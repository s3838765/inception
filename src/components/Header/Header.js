import React from 'react'
import TypeAnimation from 'react-type-animation'
import { HeaderContainer, Title } from './headerStyle.js'
import HeaderImage from '../HeaderImage/HeaderImage'

const Header = ({ hue }) => {
  return (
    <HeaderContainer>
      <Title>
        <TypeAnimation cursor={false} sequence={[1000, 'Thomas Dib']} />
      </Title>

      <HeaderImage hue={hue} />
    </HeaderContainer>
  )
}

export default Header
