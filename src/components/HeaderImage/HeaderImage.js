import React from 'react'
import { Image, BackgroundCircle, PixelArt } from './headerImageStyle.js'
import portrait from '../../images/watchingyou.apng'

const HeaderImage = ({ hue }) => {
  return (
    <Image>
      <BackgroundCircle style={{ backgroundColor: `hsl(${hue}, 50%, 50%)` }} />
      <PixelArt src={portrait} />
    </Image>
  )
}

export default HeaderImage
