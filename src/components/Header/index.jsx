import styled from "styled-components"

import { Link } from 'react-router-dom'


export function Header() {

  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;

    .logo {
       text-decoration: none;
       font-size: 30px;
       list-style: none;
       color: #E50914;
       cursor: pointer;
       font-weight: bold;
       padding: 0 3px;
    }

    .favoritos {
      text-decoration: none;
      list-style: none;
      padding: 5px 14px;
      background: #fff;
      color: #000000;
      border-radius: 4px;
      cursor: pointer;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      .logo {
       text-decoration: none;
       font-size: 25px;
       list-style: none;
       color: #E50914;
       cursor: pointer;
       font-weight: bold;
       padding: 0 3px;
    }
    }
  `;


  return (
    <Header>
      <Link to="/" className="logo">Prime Flix</Link>
      <Link to="/favorites" className="favoritos">Favoritos</Link>
    </Header>
  )
}