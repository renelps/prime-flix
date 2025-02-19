import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api";
import styled from "styled-components";
// #E50914
// #000000
export function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loanding, setLoading] = useState(true);

  const Container = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    max-width: 1200px;
  `;

  const ContainerList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    li {
      list-style: none;
      box-shadow: 0px 1px 8px #fff;
      display: flex;
      flex-direction: column;
      border-radius: 2px;
      min-height: 500px;
      padding: 10px;
      text-align: center;
      flex-direction: column;
      width: 300px;
      margin: 10px;
      cursor: pointer;

      h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        min-height: 50px;
        color: #fff;
        font-size: 1.2em;
      }

      img {
        border-radius: 2px;
        height: 440px;
        
      }

      a {
        text-decoration: none;
        color: #fff;
        padding: 10px 0;
      }

    }
  `
  const Loading = styled.div`
    margin-top: 20px;
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
  `
  useEffect(() => {
    
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "67d2f137ce5a6f19b0f17350c40f1f76",
          language: "pt-BR", 
          page: 1
        }
      })

      //console.log(response.data.results.slice(0, 10))
      setFilmes(response.data.results.slice(0, 20));
      setLoading(false)

    
    }

    loadFilmes()
  }, [])


  if(loanding) {
    return (
      <Loading>
        <h2 style={{ color: "white"}}>Carregando Filmes...</h2>
      </Loading>
    )
  }

  return (
    <Container>
      <div>
        <ContainerList>
          {filmes.map((item) => (
            <li key={item.id}>
              <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
              <h2>{item.title}</h2>
              <Link to={`/filme/${item.id}`}>Acessar</Link>
            </li>
          ))}
        </ContainerList>
      </div>
    </Container>
  )
}