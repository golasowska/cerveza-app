import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.js';
import BeerItem from './BeerItem.js';

export default class BeerDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      detailData : [],
      sugIbu: [],
      sugAbv: [],
      sugEbc: []
    }
  };

  componentDidMount=()=>{
    const {id}=this.props.match.params;
    this.FetchBeer(id);
  };

  componentDidUpdate=()=>{
    this.FetchIbu();
    this.FetchAbv();
    this.FetchEbc();
  }

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

  FetchIbu=()=>{
    const {ibu}=this.state.detailData;
    axios.get(`https://api.punkapi.com/v2/beers?ibu_gt=${ibu-1}&ibu_lt=${ibu+1}`)
    .then(response => {
      this.setState({
        sugIbu: response.data[1]
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  FetchAbv=()=>{
    const abv = Math.floor(this.state.detailData.abv);
    axios.get(`https://api.punkapi.com/v2/beers?abv_gt=${abv-1}&abv_lt=${abv+1}`)
    .then(response => {
      this.setState({
        sugAbv: response.data[1]
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  FetchEbc=()=>{
    const {ebc}=this.state.detailData;
    axios.get(`https://api.punkapi.com/v2/beers?ebc_gt=${ebc-1}&ebc_lt=${ebc+1}`)
    .then(response => {
      this.setState({
        sugEbc: response.data[1]
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
        <BeerItem beer={this.state.sugIbu} />
        <BeerItem beer={this.state.sugAbv} />
        <BeerItem beer={this.state.sugEbc} />
      </div>
    )
  }
}
