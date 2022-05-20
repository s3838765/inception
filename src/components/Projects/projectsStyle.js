import styled from 'styled-components'

export const AllProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  max-width: 100rem;
  justify-content: center;
  margin: 15rem auto;
  padding: 0 1.5rem;

  @media (max-width: 800px) {
    gap: 9rem;
  }
`

export const ProjectContainer = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const InfoContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  max-width: 40%;
  padding-left: 2.5%;
  padding-right: 2.5%;
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
  @media (max-width: 800px) {
    display: flex;
    max-width: 95%;
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 50%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  float: ${p => p.inverseAlign ? 'left' : 'right'};

  :hover {
    filter: ${p => p.live && 'brightness(0.75)'};
  }

  @media (max-width: 800px) {
    padding: 0;
    width: 80%;
  }
`
