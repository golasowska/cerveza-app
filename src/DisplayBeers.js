import React from 'react';
import _ from 'lodash';
import BeerItem from './BeerItem.js';


export default class DisplayBeers extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading: false,
      display: 'block',
      noDisplay: 'none'
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.HandleClick)
  };

  componentWillUnmount(){
    window.removeEventListener('scroll', this.HandleClick)
  };


  ShowBeers=()=>{
    return _.map(this.props.data, beer =>{
      return <BeerItem key={beer.id} beer={beer} />
    });
  };

  HandleClick=()=>{
    this.setState({
      loading: true,
      display: 'none',
      noDisplay: 'block'
    })
  };

  render(){
    const moreBeers = _.map(this.props.dataScroll, beer => {
      return <BeerItem key={beer.id} beer={beer} />
    });

    return(
      <div>
        <div>
          {this.ShowBeers()}
        </div>
        <div>
          <button style={{display: this.state.display}} onClick={this.HandleClick}> Load more...</button>
        </div>
        <div>
          {this.state.loading?moreBeers:null}
        </div>
        <h3 style={{display: this.state.noDisplay}}>KONIEC PIWEREK</h3>
      </div>
    )
  }
}
