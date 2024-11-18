import logoInmoov from '../Imagens/InmoovLogo.png';
import React from 'react';
import '../styles/home.css';
import '../App.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
<div className="Home">
        <header className="Home-header">
          <div className='Logo-space'>
            <img src={logoInmoov} className="Inmoov-logo" alt="logo"
            />
            <p>
              INMOOV
            </p>
          </div>
        <ul>
          <li><Link to=""></Link></li>
          <li><a href=''>Sobre</a></li>
          <li><Link to="/Login">Cadastro/Login</Link></li>
          <li><a href=''>Contato</a></li>
        </ul>
      </header>
    </div>

    )
}

export default Home;