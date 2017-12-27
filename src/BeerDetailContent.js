import React from 'react';
import Suggestion from './Suggestion.js';
import LocalStorage from './LocalStorage.js';

export default class BeerDetailContent extends React.Component{


  render(){
    const {name, image_url, brewers_tips, abv, description, ibu}=this.props.detailData;
    return(
      <div>
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
              <LocalStorage beer={this.props.detailData}/>
            </div>
          </div>
            <Suggestion detailData={this.props.detailData} />
          </div>
      </div>
    )
  }
}
