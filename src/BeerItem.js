import React from 'react';


export default class BeerItem extends React.Component{

  ShowBeers=()=>{
    const{name, tagline, image_url} = this.props.beer;
    return <div>
      <span>{name}</span>
      <span>{tagline}</span>
      <img alt='beer' src={image_url}/>
    </div>
  }


  render(){
    console.log('propsy beerItem', this.props.beer);
    return(
      <div>
        {this.ShowBeers()}
      </div>
    )
  }
}
