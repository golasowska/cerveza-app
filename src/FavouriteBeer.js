import React from 'react';
import NavigationFav from './NavigationFav.js';
import FavouriteItem from './FavouriteItem.js';

export default class FavouriteBeer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      beers: JSON.parse(localStorage.getItem('myFavBeers')) || []
    }
  };

  displayBeers =()=>{
    return this.state.beers.map(beer=>{
      return  <FavouriteItem beer={beer} key={beer.id} removeBeer={this.removeBeer} />
    });
  };

  removeBeer=(beer)=>{
  const items=this.state.beers.filter(item=>{
    return item.id!==beer
  });
  this.setState({
    beers: items
  });
};

  render(){
    localStorage.setItem('myFavBeers', JSON.stringify(this.state.beers));
    return(
        <div>
          <NavigationFav />
          <div className='container'>
          <div className='row justify-content-center'>
            {this.displayBeers()}
          </div>
        </div>
        </div>
    )
  }
}
