import React from 'react';


export default class BeerItem extends React.Component{



  render(){
    console.log('propsy beerItem', this.props.beer);
    return(
      <div>
      Hello World!!!
      </div>
    )
  }
}
