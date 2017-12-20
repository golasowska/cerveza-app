import React from 'react';
import {Link} from 'react-router-dom';

export default class FavouriteItem extends React.Component{

  handleClick=()=>{
    this.props.removeBeer(this.props.beer.id)
  };

  ShowItem=()=>{
    const{name, tagline, image_url,id} = this.props.beer;
    return <div onClick={this.showDetail}>
      <img alt='beer' src={image_url}/>
      <Link to={`/detail/${id}`}>{name}</Link>
      <p>{tagline}</p>
      <button onClick={this.handleClick}>Remove from favourite</button>
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
