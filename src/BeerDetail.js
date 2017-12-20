import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.js';
import Suggestion from './Suggestion.js';
import LocalStorage from './LocalStorage.js';

export default class BeerDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      detailData : []
    }
  };

  componentDidMount=()=>{
    const {id}=this.props.match.params;
    this.FetchBeer(id);
  };

  FetchBeer=(id)=>{
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response => {
      this.setState({
        detailData: response.data[0]
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  render(){
    const {name, image_url, brewers_tips, abv, description, ibu}=this.state.detailData
    return(
      <div>
        <Navigation/>
        <img alt='beer' src={image_url} />
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{abv}</div>
        <div>{ibu}</div>
        <div>{brewers_tips}</div>
        <LocalStorage beer={this.state.detailData}/>
        <Suggestion detailData={this.state.detailData} />
      </div>
    )
  }
}
