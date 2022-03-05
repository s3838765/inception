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

export const Image = styled.div`
  margin: 0 auto;
  width: 40rem;

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 314px) {
    margin-top: 5rem;
  }
`

export const BackgroundCircle = styled.div`
  border-radius: 50%;
  position: fixed;
  width: 40rem;
  height: 40rem;

  @media (max-width: 800px) {
    width: 23rem;
    height: 23rem;
  }
`

export const PixelArt = styled.img`
  width: 55rem;
  display: block;
  position: relative;
  top: 3rem;
  right: 6.5rem;

  @media (max-width: 800px) {
    width: 30rem;
    right: 0;
  }
`
