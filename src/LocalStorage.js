import React from 'react';
import AlertContainer from 'react-alert';

export default class LocalStorage extends React.Component{

  alertOptions = {
    theme: 'light'
  };

  handleAdd=(e)=>{
    const beers = JSON.parse(localStorage.getItem('myFavBeers')) || [];

      if (beers.length>0) {
        for (let i = 0; i < beers.length; i++) {
          if (this.props.beer.id === beers[i].id){
            return false
          }
        };
            const myFavBeers = [ this.props.beer, ...beers];
            localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers));

        };
        if (beers.length===0) {
          const myFavBeers = [this.props.beer];
          localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers));
      };

      this.msg.show('Your beer has been saved!', {
        time:2000,
        type: 'success'
      })
  };

  render(){

    return(
      <div className='text-center'>
        <button
          className='btn btn-info bmd-btn-fab'
          onClick={this.handleAdd}>
          <i className='material-icons'>grade</i>
        </button>
        <AlertContainer ref = {a=> this.msg = a}{...this.alertOptions}/>
      </div>
    )
  }
}
