import React from 'react';


export default class BeerItem extends React.Component{

  ShowItem=()=>{
    const{name, tagline, image_url} = this.props.beer;
    return <div>
      <img alt='beer' src={image_url}/>
      <p>{name}</p>
      <p>{tagline}</p>
    </div>
  }




  render(){
    // console.log('propsy beerItem', this.props.beer);
    return(
      <div>
        {this.ShowItem()}
      </div>
    )
  }
}
