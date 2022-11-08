import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import '../styles/Nav.css'
import 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div >
        <div className='column'>
          <div className="navbar">
            <span className="navbar-brand">
              <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
              Weather App
            </span>
          </div>
          <div className="busqueda">
            <div className="tituloBuscador">
                Enter a city!
                <hr />
            </div>
              <SearchBar
                onSearch={onSearch}
              />
          </div>
        </div>
    </div>
  );
};

export default Nav;
