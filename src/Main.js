import React from 'react';
import {Link} from 'react-router-dom';

export default class Main extends React.Component{

  render(){
    return( <div className='container'>
      <div className='row justify-content-center'>
        <div id='main' className='col text-center'>

          <div id="bubbles">
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
          </div>

            <Link style={{fontSize: '4rem', color: '#ffc107'}} to='/detail'>CERVEZA</Link>
            <p>explore the world of beer</p>
        </div>
      </div>
    </div>


    )
  }
}
