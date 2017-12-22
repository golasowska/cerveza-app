import React from 'react';
import AlertContainer from 'react-alert';

export default class LocalStorage extends React.Component{

  handleAdd=(e)=>{
    e.preventDefault();
    const beers = JSON.parse(localStorage.getItem('myFavBeers')) || [];

      console.log('to propsy w kliku', this.props.beer);


      if (beers.length>0) {
        for (var i = 0; i < beers.length; i++) {
          if (this.props.beer.id === beers[i].id){
            return false
          } else   {
            const myFavBeers = [ this.props.beer, ...beers];
            console.log('jazda jazdaaaaa');
            console.log('ajdiczeq', this.props.beer.id);
            localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers));
            // console.log('beers id', beers[1].id);
          }
        }
      } else {
        const myFavBeers = [this.props.beer];
        localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers));
      }


      console.log(localStorage);
      console.log(beers);
      console.log('dlugosc beerow', beers.length);

      this.msg.show('Your beer has been saved!', {
        time:2000,
        type: 'success'
      })

  };

  render(){
    console.log('propsiki', this.props.beer);
    return(
      <div className='text-center'>
        <button
          className='btn btn-info bmd-btn-fab'
          onClick={this.handleAdd}>
          <i class="material-icons">grade</i>
        </button>
        <AlertContainer ref = {a=> this.msg = a}{...this.alertOptions}/>
      </div>
    )
  }
}
