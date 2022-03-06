import styled from 'styled-components'

export const HeaderContainer = styled.div`
  // position: relative;
  // height: fit-content;
`

export const Title = styled.h1`
  height: 6rem;
  text-align: center;
  font-size: 4rem;

  @media (max-width: 800px) {
    font-size: 3.5rem;
    position: relative;
    top: -2rem;
    margin-bottom: -2rem;
  }
`
