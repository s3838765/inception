import styled from 'styled-components'

export const AllProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  max-width: 100rem;
  justify-content: center;
  margin: 15rem auto;
  padding: 0 5rem;

  @media (max-width: 800px) {
    gap: 12rem;
  }
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-areas: 'image info';
  gap: 5rem;

  ${p => p.inverseAlign && `
    grid-template-areas: 'info image';
  `}

  @media (max-width: 800px) {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
`

export const InfoContainer = styled.div`
  grid-area: info;
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  word-wrap: break-word;
  white-space: normal;


  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
    padding: 0;
    max-width: 95%;
  }
`

export const Title = styled.a`
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
`

export const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 800px) {
    justify-content: center;
  }
`

export const Technology = styled.span`
  width: fit-content;
  padding: 0.3rem 1rem;
  border-radius: 2rem;
  font-style: italic;
  vertical-align: super;
  user-select: none;
  color: white;
  word-wrap: initial;
  white-space: normal;
  overflow: hidden;
`

export const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
`

export const ImageLink = styled.a`
  position: relative;
  grid-area: image;
  display: block;
  text-decoration: none;

  :hover {
    img {
      filter: ${p => p.live && 'brightness(0.4) blur(4px)'};
    }
    span {
      opacity: 1;
    }
  }


  @media (max-width: 800px) {
    display: flex;
    max-width: 85%;
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  transition: all 0.2s ease;
  

  @media (max-width: 800px) {
    margin: 0;
  }
`

export const ImageCaption = styled.span`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;

  transition: all 0.2s ease;
  font-size: 1.5rem;
  display: flex;
  color: white;
  opacity: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
`
