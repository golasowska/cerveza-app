import React from 'react';
import axios from 'axios';
import SuggestionIbu from './Suggestion.Ibu.js';
import SuggestionAbv from './Suggestion.Abv.js';
import SuggestionEbc from './Suggestion.Ebc.js';

export default class Suggestion extends React.Component{
  constructor(props){
    super(props);
    this.state={
      allData:[],
      loading: false,
    }
  };

  componentDidMount() {
      this.FetchArr();
  }

  showSuggestion=()=>{
    this.SetIbu();
    this.SetAbv();
    this.SetEbc();
    this.setState({
      display: 'none'
    })
  };

  FetchArr=()=>{
    axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(response => {
      this.setState({
        allData: response.data
      });
    })
  };


  render(){
    return(<div className='container'>
      <div className='row justify-content-center'>
      <button className='btn btn-outline-info'>You might also like</button>
      {this.state.loading?(<SuggestionIbu allData={this.state.allData} detailData={this.props.detailData}/>):null}
      {this.state.loading?(<SuggestionAbv allData={this.state.allData} detailData={this.props.detailData}/>):null}
      {this.state.loading?(<SuggestionEbc allData={this.state.allData} detailData={this.props.detailData}/>):null}
      </div>
      </div>
    )
  }
}
