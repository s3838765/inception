import React from 'react'
import TypeAnimation from 'react-type-animation'
import { HeaderContainer, Title } from './headerStyle.js'
import HeaderImage from '../HeaderImage/HeaderImage'
import Links from '../Links/Links'

const Header = ({ hue }) => {
  return (
    <HeaderContainer>
      <Title>
        <TypeAnimation cursor={false} sequence={[1000, 'Thomas Dib']} />
      </Title>

      <Links />

      <HeaderImage hue={hue} />
    </HeaderContainer>
  )
}

export default Header
