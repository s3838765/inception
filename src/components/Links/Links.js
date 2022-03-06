import React from 'react'

import Button from '../Button/Button'
import { LinksContainer } from './linksStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
  return (
    <LinksContainer>
      <Button link={'https://github.com/s3838765'} icon={<FontAwesomeIcon icon={faGithub} />} text={'GitHub'} />
    </LinksContainer>
  )
}

export default Links
