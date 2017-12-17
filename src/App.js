import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Main from './Main.js';
import FetchBeers from './FetchBeers.js';
import BeerDetail from './BeerDetail.js';
import FavouriteBeer from './FavouriteBeer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path='/detail/:id' component={BeerDetail} />
          <Route path='/detail' component={FetchBeers} />
          <Route path='/favourite' component={FavouriteBeer} />
          <Route exact path='/' component={Main} />
        </Switch>
      </div>

    );
  }
}


export default App;
