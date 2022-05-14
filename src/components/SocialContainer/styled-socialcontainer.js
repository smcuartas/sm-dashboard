import styled from 'styled-components'

const Social = styled.div`
  display: block;
  margin: 50px 0;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Social
