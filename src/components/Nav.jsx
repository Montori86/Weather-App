import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import About from './About.jsx'

    function Nav({onSearch}) {
      return (
        <nav   className="navbar navbar-dark p-3 mb-2 bg-info text-white d-flex bd-highlight mb-3 " >
          <Link to='/'>
            <span  className='icono' >
                <i className="fas fa-home fa-2x p-2 bd-highligh" ></i>
            </span>

          </Link>
          <Link to='/about'>
             <span  className='icono' >
              <i  className="fas fa-info fa-2x p-2 bd-highlight" >nfo</i>
              </span> 
          </Link>
          <p className="title">Wheather-APP</p>
          <div className="ms-auto p-2 bd-highlight ml-auto p-2 bd-highlight ">
            <SearchBar
              onSearch={onSearch}
            />
            </div>
        </nav>
  );
};

export default Nav;
