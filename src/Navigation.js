import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component{



  render(){

    return(
        <nav className='navbar navbar-light'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <h2 className='navbar-brand' style={{color: '#f9f9f9'}}>CERVEZA</h2>
            </div>
            <ul className='nav navbar-nav navbar-right'>
              <li className='nav-item' key={1}>
                <Link style={{color: '#f9f9f9'}} className='nav-link' to='/detail'>Cervezas</Link>
              </li>
              <li className='nav-item' key={2}>
                  <Link style={{color: '#f9f9f9'}} className='nav-link' to='/favourite'>Favourite</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}
