import { styled, ThemeProvider } from 'styled-components';
import { StyleGlobal } from './styles/config-global';
import { ToastContainer } from 'react-toastify';
import { RoutesApp } from './routes';
import { theme } from './styles/theme';

function App() {

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  `


  return (
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={3000}/>
      <StyleGlobal />
      <Container>
        <RoutesApp />
      </Container>
    </ThemeProvider>

  )
}


export default App;