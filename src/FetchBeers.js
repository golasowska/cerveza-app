import React from 'react';
import axios from 'axios';
import DisplayBeers from './DisplayBeers.js';
import Navigation from './Navigation.js';

export default class FetchBeers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data : [],
      dataScroll: []
    }
  }


  componentDidMount=()=>{
    this.FetchBeers();

  }

  FetchBeers=()=>{
    axios.get('https://api.punkapi.com/v2/beers')
    .then(response => {
      // console.log(response.data[2]);
      this.setState({
        data: response.data.slice(0,20),
        dataScroll: response.data.slice(20,25)
      })
      // console.log('data', this.state.data);
    })
    .catch(function(error) {
      console.log(error);
    });
  };



  render(){
    return(
      <div>
        <Navigation />
        <DisplayBeers data={this.state.data}
        dataScroll={this.state.dataScroll}/>
      </div>
    )
  }







};
