import React from 'react'
import { ButtonContainer, ButtonImage, ButtonText } from './buttonStyle'

const Button = ({ link, icon, text }) => {
  return (
    <a href={link} target={'_blank'}>
      <ButtonContainer>
        <ButtonImage>{icon}</ButtonImage>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    </a>
  )
}

export default Button
