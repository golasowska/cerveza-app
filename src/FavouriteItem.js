import React from 'react';
import {Link} from 'react-router-dom';

export default class FavouriteItem extends React.Component{

  handleClick=()=>{
    this.props.removeBeer(this.props.beer.id)
  };

  ShowItem=()=>{
    const{name, tagline, image_url,id} = this.props.beer;
    return <div className='text-center card beerItem favItem' onClick={this.showDetail}>
      <div className='text-center'><img className='imageBeer' alt='beer' src={image_url}/></div>
      <p className=''><Link className='btn btn-info btn-wrap-text' to={`/detail/${id}`}>{name}</Link></p>
      <p className=''>{tagline}</p>
      <button id='remove' className='btn btn-danger' onClick={this.handleClick}>Remove</button>
    </div>
  };


  render(){
    return(
      <div>
        <div>
          {this.ShowItem()}
        </div>
      </div>
    )
  }
}
