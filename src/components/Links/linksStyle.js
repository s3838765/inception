import styled from 'styled-components'

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  margin-bottom: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`
