import styled from "styled-components"
import { Link } from "react-router-dom"

export function Error() {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 60px);
    flex-direction: column;
     
    h1 {
      font-size: 3.5em;
      color: white;
    }
    h2 {
      color: white;
    }

    a {
      text-decoration: none;
      color: #fff;
      margin: 5px 0;
    }
  
    `
  return (
    <Container>
      <h1>:( 404 NOT AFOUND</h1>
      <Link to="/">Home</Link>
    </Container>
  )
}