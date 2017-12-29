import React from 'react';
import axios from 'axios';
import SuggestionIbu from './SuggestionIbu.js';
import SuggestionAbv from './SuggestionAbv.js';
import SuggestionEbc from './SuggestionEbc.js';

export default class Suggestion extends React.Component{
  constructor(props){
    super(props);
    this.state={
      allData:[],
      loading: false,
    }
  };

  componentDidMount=()=> {
      this.FetchArr();
  };

  FetchArr=()=>{
    axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(response => {
      this.setState({
        allData: response.data,
        loading: true
      });
    })
  };


  render(){
    return(<div className='container'>
      <div className='row justify-content-center text-center'>
      You might also like:
    </div>
    <div className='row justify-content-center text-center'>
      {this.state.loading?(<SuggestionIbu allData={this.state.allData} detailData={this.props.detailData}/>):null}
      {this.state.loading?(<SuggestionAbv allData={this.state.allData} detailData={this.props.detailData}/>):null}
      {this.state.loading?(<SuggestionEbc allData={this.state.allData} detailData={this.props.detailData}/>):null}
      </div>
      </div>
    )
  }
}
