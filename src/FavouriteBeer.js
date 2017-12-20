import React from 'react';
import Navigation from './Navigation.js';
import BeerItem from './BeerItem.js';

export default class FavouriteBeer extends React.Component{


  displayBeers =()=>{
    const beers = JSON.parse(localStorage.getItem('myFavBeers')) || [];
    return beers.map(beer=>{
      return <BeerItem key={beer.id} beer={beer} />

    })
  };


  render(){
    return(
        <div>
          <Navigation />
          <div>
            {this.displayBeers()}
          </div>
        </div>
    )
  }
}
