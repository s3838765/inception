import React from 'react'
import TypeAnimation from 'react-type-animation'
import { Title, Image, Portrait, Circle } from './headerStyle.js'
import portrait from '../../images/watchingyou.apng'

const Header = () => {
  return (
    <>
      <Title>
        <TypeAnimation cursor={false} sequence={[1000, 'Thomas Dib']} wrapper='h1' />
      </Title>

      <Image>
        <Circle />
        <Portrait src={portrait} />
      </Image>
    </>
  )
}

export default Header
