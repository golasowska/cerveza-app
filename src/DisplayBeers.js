import React from 'react';
import _ from 'lodash';
import BeerItem from './BeerItem.js';

export default class DisplayBeers extends React.Component{



  ShowItem=()=>{
    console.log('propsy papapapa', this.props.data.data);
    return _.map(this.props.data.data, beer =>{
      console.log('beer', beer);
      return <BeerItem key={beer.id} beer={beer} />
    });
  };





  render(){
    return(
      <div>{this.ShowItem()}</div>
    )
  }
}
