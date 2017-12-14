import React from 'react';
import axios from 'axios';
import DisplayBeers from './DisplayBeers.js';

export default class FetchBeers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data : []
    }
  }

  componentDidMount=()=>{
    this.FetchBeers();

  }

  FetchBeers=()=>{
    axios.get('https://api.punkapi.com/v2/beers')
    .then(response => {
      console.log(response);
      this.setState({
        data: response
      })
      console.log('data', this.state.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  };



  render(){
    return(
      <DisplayBeers data={this.state.data}/>
    )
  }







};
