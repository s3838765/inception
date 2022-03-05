import React from 'react'
import { ButtonContainer, ButtonImage, ButtonText } from './buttonStyle'

const Button = ({ icon, text }) => {
  return (
    <a href={'https://github.com/s3838765'} target={'_blank'}>
      <ButtonContainer>
        <ButtonImage>{icon}</ButtonImage>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    </a>
  )
}

export default Button
