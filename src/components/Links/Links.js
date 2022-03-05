import React from 'react'

import Button from '../Button/Button'
import { LinksContainer } from './linksStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Links = () => {
  return (
    <LinksContainer>
      <Button icon={<FontAwesomeIcon icon={faGithub} />} text={'GitHub'} />
    </LinksContainer>
  )
}

export default Links
