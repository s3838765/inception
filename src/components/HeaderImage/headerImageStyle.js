import styled from 'styled-components'

export const Image = styled.div`
  display: flex;
  margin: 0 auto;
  width: 40rem;
  justify-content: center;

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
  position: absolute;
  width: 30rem;
  height: 30rem;

  @media (max-width: 800px) {
    width: 23rem;
    height: 23rem;
  }
`

export const PixelArt = styled.img`
  width: 38rem;
  display: block;
  position: relative;
  top: 4.75rem;

  @media (max-width: 800px) {
    width: 30rem;
    right: 0;
  }
`
