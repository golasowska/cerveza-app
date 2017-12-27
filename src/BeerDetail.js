import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.js';
import BeerDetailContent from './BeerDetailContent.js';
import {RiseLoader} from 'react-spinners';

export default class BeerDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      detailData : [],
      idParams: this.props.match.params.id,
      loading: false,
      loadingSpinner: true
    }
  };

  componentDidMount=()=>{
    let {id}=this.props.match.params;
    this.FetchBeer(id);
  };

  FetchBeer=(id)=>{
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response => {
      this.setState({
        detailData: response.data[0],
        loading: true,
        loadingSpinner: false
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };


  render(){
    if (this.state.idParams !== this.props.match.params.id) {
      window.location.reload();
    };
    return(
      <div>
        <Navigation/>
          {this.state.loading?(<BeerDetailContent detailData={this.state.detailData}/>): (  <div className='row justify-content-center'>
              <div className='sweet-loading text-center'>
                 <RiseLoader color={'#43b6e0'} loading={this.state.loadingSpinner}/>
              </div>
            </div>)}
      </div>
    )
  }
}
