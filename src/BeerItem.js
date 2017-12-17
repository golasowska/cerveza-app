import React from 'react';
import {Link} from 'react-router-dom';

export default class BeerItem extends React.Component{


  ShowItem=()=>{
    const{name, tagline, image_url,id} = this.props.beer;
    return <div onClick={this.showDetail}>
      <img alt='beer' src={image_url}/>
      <Link to={`/detail/${id}`}>{name}</Link>
      <p>{tagline}</p>
    </div>
  };


  render(){
    // console.log('propsy beerItem', this.props.beer);
    return(
      <div>
        <div>
          {this.ShowItem()}
        </div>
      </div>
    )
  }
}
