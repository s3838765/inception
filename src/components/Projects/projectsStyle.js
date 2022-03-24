import styled from 'styled-components'

export const AllProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  max-width: 100rem;
  justify-content: center;
  margin: 15rem auto;
  padding: 0 1.5rem;
`
export const ProjectContainer = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

export const InfoContainer = styled.div`
  display: inline-block;
  max-width: 40%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  word-wrap: break-word;
  white-space: normal;

  @media (max-width: 800px) {
    max-width: 90%;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.a`
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  color: black;
`

export const Technology = styled.span`
  width: fit-content;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
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
  font-size: 1.2rem;
`

export const Image = styled.img`
  display: inline-block;
  width: 50%;
  padding-left: 2.5%;
  padding-right: 2.5%;

  @media (max-width: 800px) {
    width: 80%;
  }
`
