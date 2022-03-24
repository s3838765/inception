import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 15rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0;

  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
  &:hover {
    background-color: #d4d4d4;
  }
`

export const ButtonImage = styled.span`
  position: relative;
  float: left;
  font-size: 2.5rem;
  padding-left: 1rem;
`

export const ButtonText = styled.span`
  position: relative;
  float: left;
  font-size: 1.5rem;
  padding-left: 2rem;
  vertical-align: middle;
  font-weight: bold;
`
