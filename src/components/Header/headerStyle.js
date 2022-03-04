import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;

  .type::after {
    content: '|';
    animation: cursor 1.1s infinite step-start;
  }

  @keyframes cursor {
    50% {
      opacity: 0;
    }
  }
`

export const Image = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40rem;
  height: 40rem;
`

export const PixelArt = styled.img`
  width: 55rem;
  display: block;
  margin: auto;
  position: relative;
  top: 3rem;
  right: 6.5rem;
`

export const BackgroundCircle = styled.div`
  border-radius: 50%;
  margin: auto;
  position: absolute;
  width: 40rem;
  height: 40rem;
`
