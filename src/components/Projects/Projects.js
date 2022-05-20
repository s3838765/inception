import React from 'react'

import {
  AllProjectsContainer,
  ProjectContainer,
  InfoContainer,
  Title,
  Technologies,
  Technology,
  Description,
  ImageLink,
  Image,
} from './projectsStyle'

import projectList from './Projects.json'

const Project = ({ id, inverseAlign = false, hue }) => {
  return (
    <>
      <ProjectContainer>
        <InfoContainer>
          <Title href={projectList[id].link} target={'_blank'}>
            {projectList[id].name}
          </Title>
          <Technologies>
            {projectList[id].technologies.map(technology => (
              <Technology key={technology} style={{ backgroundColor: `hsl(${hue}, 50%, 50%)` }}>
                {technology}
              </Technology>
            ))}
          </Technologies>
          <Description>{projectList[id].description}</Description>
        </InfoContainer>

        <ImageLink href={projectList[id]?.live} target='_blank'>
            <Image src={projectList[id].image} live={projectList[id].live} inverseAlign={inverseAlign}/>
        </ImageLink>
      </ProjectContainer>
    </>
  )
}

const Projects = ({ hue }) => {
  const allProjects = []
  for (var id in projectList) {
    allProjects.push(<Project key={id} id={id} inverseAlign={parseInt(id) % 2 === 0 ? true : false} hue={hue} />)
  }
  return <AllProjectsContainer>{allProjects}</AllProjectsContainer>
}

export default Projects
