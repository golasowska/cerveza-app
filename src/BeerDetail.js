import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.js';
import Suggestion from './Suggestion.js';
import LocalStorage from './LocalStorage.js';

export default class BeerDetail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      detailData : [],
      idParams: this.props.match.params.id
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
        detailData: response.data[0]
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
    const {name, image_url, brewers_tips, abv, description, ibu}=this.state.detailData
    return(
      <div>
        <Navigation/>
          <div className='container'>
            <div className='row rowDet justify-content-center align-items-center'>
              <div className='col-md-5 text-center'>
              <img  className='imageBeerDet' alt='beer' src={image_url} />
              </div>
            <div className='col-md-7'>
              <h3 className='mb-4'>{name}</h3>
              <h6 className='mb-2'>{description}</h6>
              <div className='mb-2'>ABV : {abv}</div>
              <div className='mb-2'>IBU : {ibu}</div>
              <div className='text-muted mb-5'>{brewers_tips}</div>
              <LocalStorage beer={this.state.detailData}/>
            </div>
          </div>
            <Suggestion detailData={this.state.detailData} />
          </div>
      </div>
    )
  }
}
