import React from 'react';
import axios from 'axios';
import BeerItem from './BeerItem.js';

export default class Suggestion extends React.Component{
  constructor(props){
    super(props);
    this.state={
      sugIbu: [],
      sugAbv: [],
      sugEbc: []
    }
  };

  componentDidMount=()=>{
      this.FetchIbu();
      this.FetchAbv();
      this.FetchEbc();
  };

  FetchIbu=()=>{
    const {ibu}=this.props.detailData;
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
    const abv = Math.floor(this.props.detailData.abv);
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
    const {ebc}=this.props.detailData;
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

    return(
      <div>
        <BeerItem beer={this.state.sugIbu} />
        <BeerItem beer={this.state.sugAbv} />
        <BeerItem beer={this.state.sugEbc} />
      </div>
    )
  }
}
