import { useEffect, useState } from "react";
import { IconStar } from "../components/icons/star";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

export function Favorites() {
  const [movie, setMovie] = useState([]);


  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");
    setMovie(JSON.parse(myList) || []);
  }, [])


  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;
    h2 {
      color: #fff;
      margin: 20px 0;
      text-align: center;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin: 20px 0;
      width: 100%;
      text-align: center;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      flex-direction: column;
      gap: 10px;

      li {
        display: flex;
        width: 100%;
        justify-content: flex-start;

        div:first-child {
          img {
            width: 300px;
          }
        }

        div:nth-child(2) {
          display: flex;
          align-items: center;
          width: 377px;
          flex-direction: column;
          
          p {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            color: white;
            margin-top: auto;
          }

          .avalieAndDelete {
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            padding: 0 5px;
            margin: 10px;
            margin-top: auto;
          }

          a {
            width: 50px;
          }

          button {
            cursor: pointer;
            padding: 3px;
            border: none;
            background: red;
            border-radius: 3px;
            width: 50px;
          }
        }



        h3 {
          color: #fff;
          padding: 5px;
        }


      }


    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      flex-direction: column;
      max-width: 90%;
      

      span {
        color: #fff;
        margin: 10px 0;
        width: 100%;
        text-align: center;
      }
      ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        flex-direction: column;
        gap: 10px;

        li {
          max-width: 100%;
          flex-direction: column;

          div:first-child {
            img {
              width: 100%;
            }
          }

          div:nth-child(2) {
            width: 100%;
            
            p {
              padding: 10px 0;
            }

            .avalieAndDelete {
              padding: 10px 0;
            }

            a {
              width: 50px;
            }

            button {
              cursor: pointer;
              padding: 3px;
              border: none;
              background: red;
              border-radius: 3px;
              width: 50px;
            }
          }



          h3 {
            color: #fff;
            padding: 5px;
         }
      }
    }
  }
  `;

  function deleteMovie(id) {
    let filmFilter = movie.filter((item) => {
      return (item.id !== id);
    })

    setMovie(filmFilter);
    localStorage.setItem("@primeflix", JSON.stringify(filmFilter))
    toast.success("Filme removido com sucesso!!")
  }


  return (
    <Container>
      <h2>Meus Filmes</h2>

      {movie.length === 0 && <span>Não tem filmes salvos na sua lista :(</span>}
      <ul>
        {movie.map((movie) => {
          return (
            <li key={movie.id}>
            <div>
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            </div>
            <div>
              <h3>{movie.title}</h3>
              <p>
                avaliação: {movie.vote_average.toFixed(1)}
                <IconStar />
              </p>

              <div className="avalieAndDelete">
                <Link to={`/filme/${movie.id}`}>Detalhes</Link>
                <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
              </div>
            </div>
          </li>
          )
        })}
      </ul>

    </Container>
  )
}