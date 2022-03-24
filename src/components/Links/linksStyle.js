import styled from 'styled-components'

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-bottom: 3rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
