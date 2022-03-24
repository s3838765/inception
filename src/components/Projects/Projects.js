import React from 'react'

import {
  AllProjectsContainer,
  ProjectContainer,
  InfoContainer,
  Title,
  Technology,
  Description,
  Image,
  TitleContainer,
} from './projectsStyle'

import projectList from './Projects.json'

const Project = ({ id, inverseAlign = false, hue }) => {
  return (
    <>
      <ProjectContainer>
        <InfoContainer>
          <TitleContainer>
            <Title href={projectList[id].link} target={'_blank'}>
              {projectList[id].name}
            </Title>
            {projectList[id].technologies.map(technology => (
              <Technology key={technology} style={{ backgroundColor: `hsl(${hue}, 50%, 50%)` }}>
                {technology}
              </Technology>
            ))}
          </TitleContainer>
          <Description>{projectList[id].description}</Description>
        </InfoContainer>

        {inverseAlign ? (
          <Image style={{ float: 'left' }} src={projectList[id].image} />
        ) : (
          <Image style={{ float: 'right' }} src={projectList[id].image} />
        )}
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
