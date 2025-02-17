import { styled } from 'styled-components'
import { StyleGlobal } from './styles/config-global'
import { RoutesApp } from './routes';

function App() {

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  `


  return (
    <Container>
      <StyleGlobal />
      <RoutesApp />
    </Container>
  )
}


export default App;