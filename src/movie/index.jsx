import styled from "styled-components"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from '../services/api'
import { IconStar } from "../components/icons/star";
import { IconSave } from "../components/icons/save";
export function Filme(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [loading, setLoanding] = useState(true);

  useEffect(() => {
    async function loadingMovie() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "67d2f137ce5a6f19b0f17350c40f1f76",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
        setLoanding(false);
      }).catch(() => {
        console.log("filme nao encontrado")
        navigate("/", { replace: true })
        return;
      })
    }

    loadingMovie()

    return () => {
      console.log('Componente foi desmontado');
    }
  }, [id, navigate])

  const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    color: #fff;

  
  `
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    max-height: 100%;
    text-align: center;
    max-width: 1200px; 
    gap: 20px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      div:nth-child(2) {
      width: 90%;
      margin: auto;

      p {
        color: #fff;
        text-align: justify;
      }
    }

    }
    div:first-child{
      margin: 10px;
      max-width: 600px;
      img {
        width: 100%;
        border-radius: 5px; 
        margin: auto;
      }
    }

    div:nth-child(2) {
      max-width: 600px;
      h2 {
        color: red;
        margin-bottom: 20px;
      }

      h3 {
        color: red;
      }

      p {
        color: #fff;
        text-align: justify;
        margin: 10px;
        max-width: 100%;
      }

      .areaButton {
        width: 100%;
        flex-direction: column;
        margin-top: 10px;
        gap: 12px;
        
        .primaryButton {
          background: none;
          border: none;
          color: white;
          outline: none;

        }
        .secundaryButton {
          display: flex;
          align-items: center;
          justify-content: center;
          outline: none;
          width: 100%;
          background: none;
          border: none;
          background: #E50914;
          padding: 10px 0;
          border-radius: 2px;
          color: #fff;
          transition: all 0.5s;
          cursor: pointer;
        }
        
        .secundaryButton:hover {
          background: #ac1309;
          border: 5px;
          color: #fff;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #fff;
      }
    }
  `;

  function saveMovie() {
    const myList = localStorage.getItem("@primeflix")

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some((savedMovies) => savedMovies.id === movie.id);

    if(hasMovie) {
      toast.warn("ESTE FILME JÁ ESTÁ NA SUA LISTA!!");
      return;
    }

    savedMovies.push(movie)
    localStorage.setItem("@primeflix", JSON.stringify(savedMovies));

    toast.success("FILME SALVO COM SUCESSO!!")
  }

  if(loading) {
    return (
      <Loading>
        <h2>Carregando...</h2>
      </Loading>
    )
  }
  return (
    <Container>
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <h3>Sinopse</h3>
        <p>{movie.overview}</p>
        <div>
          <span>avaliação: {movie.vote_average.toFixed(1)}</span>
          <IconStar />
        </div>
        <div className="areaButton">
            <button className="primaryButton">
              <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target="blank" rel="external">
                trailer
              </a>
            </button>
            <button class="secundaryButton"  onClick={saveMovie}><IconSave />Salva</button>
        </div>
      </div>
    </Container>
  )
}