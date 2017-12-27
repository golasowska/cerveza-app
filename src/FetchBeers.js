import React from 'react';
import axios from 'axios';
import DisplayBeers from './DisplayBeers.js';
import NavigationBeer from './NavigationBeer.js';
import {RiseLoader} from 'react-spinners';

export default class FetchBeers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data : [],
      dataScroll: [],
      loading: true,
      loaderData: false
    }
  };

  componentDidMount=()=>{
    this.FetchBeers();
  }

  FetchBeers=()=>{
    axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(response => {
      this.setState({
        data: response.data.slice(0,20),
        dataScroll: response.data.slice(20,80),
        allData: response.data,
        loaderData:true,
        loading: false
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  render(){
    return(
      <div>
        <NavigationBeer />
        {this.state.loaderData? (<DisplayBeers data={this.state.data}
        dataScroll={this.state.dataScroll}/>) :null}
      <div className='row justify-content-center'>
        <div className='sweet-loading text-center'>
           <RiseLoader color={'#43b6e0'} loading={this.state.loading}/>
        </div>
      </div>
      </div>
    )
  }







};
