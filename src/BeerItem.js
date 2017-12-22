import React from 'react';
import {Link} from 'react-router-dom';

export default class BeerItem extends React.Component{


  ShowItem=()=>{
    const{name, tagline, image_url,id} = this.props.beer;
    return <div className='text-center card' id='beerItem' onClick={this.showDetail}>
            <div className='text-center'><img className='imageBeer' alt='beer' src={image_url}/></div>
            <p className=''><Link className='btn btn-primary btn-wrap-text' to={`/detail/${id}`}>{name}</Link></p>
            <p className=''>{tagline}</p>
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
