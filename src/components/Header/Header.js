import React from 'react'
import TypeAnimation from 'react-type-animation'
import { HeaderContainer, Title, Image, BackgroundCircle, PixelArt } from './headerStyle.js'
import portrait from '../../images/watchingyou.apng'

const Header = () => {
  const hue = Math.floor(Math.random() * 360)
  return (
    <HeaderContainer>
      <Title>
        <TypeAnimation cursor={false} sequence={['Thomas Dib']} />
      </Title>

      <Image>
        <BackgroundCircle style={{ backgroundColor: `hsl(${hue}, 50%, 50%)` }} />
        <PixelArt src={portrait} />
      </Image>
    </HeaderContainer>
  )
}

export default Header
