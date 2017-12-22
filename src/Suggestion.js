import React from 'react';
import axios from 'axios';
import BeerItem from './BeerItem.js';

export default class Suggestion extends React.Component{
  constructor(props){
    super(props);
    this.state={
      allData:[],
      loadingIbu: false,
      loadingAbv: false,
      loadingEbc: false,
      sugIbu: [],
      sugAbv: [],
      sugEbc: [],
      display: 'block'
    }
  };

  componentDidMount() {
      this.FetchArr();
  }

  showSuggestion=()=>{
    this.SetIbu();
    this.SetAbv();
    this.SetEbc();
    this.setState({
      display: 'none'
    })
  };

  FetchArr=()=>{
    axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then(response => {
      this.setState({
        allData: response.data
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  SetIbu=()=>{
    const newIbuArr = this.state.allData.sort((a,b)=>{return a.ibu-b.ibu});
    let idArr = [];
    const id=this.props.detailData.id;
    Object.getOwnPropertyNames(newIbuArr).forEach(
      (val, idx, array)=>{
        idArr.push( newIbuArr[val].id);
      }
    );
    const newIndex = idArr.indexOf(id) +1;
    const sugIbu = newIbuArr[newIndex];

      this.setState({
        sugIbu,
        loadingIbu: true
      })
    };

    SetAbv=()=>{
      const newAbvArr = this.state.allData.sort((a,b)=>{return a.abv-b.abv});
      let idArr = [];
      const id = this.props.detailData.id;
      Object.getOwnPropertyNames(newAbvArr).forEach(
        (val, idx, array)=>{
          idArr.push( newAbvArr[val].id);
        }
      );
      const newIndex = idArr.indexOf(id) +1;
      const sugAbv= newAbvArr[newIndex];

      this.setState({
        sugAbv,
        loadingAbv: true
      })
    };

    SetEbc=()=>{
      const newEbcArr = this.state.allData.sort((a,b)=>{return a.ebc - b.ebc});
      let idArr = [];
      const id = this.props.detailData.id;
      Object.getOwnPropertyNames(newEbcArr).forEach(
        (val, idx, array)=>{
          idArr.push( newEbcArr[val].id);
        }
      );
      const newIndex = idArr.indexOf(id) +1;
      const sugEbc = newEbcArr[newIndex];

      this.setState({
        sugEbc,
        loadingEbc: true
      })
    };


  render(){
    return(<div>
      <button onClick={this.showSuggestion}
        style={{display: this.state.display}}
        >Pokaz podobne piwerka</button>
      {this.state.loadingIbu?(<BeerItem beer={this.state.sugIbu} />):null}
      {this.state.loadingIbu?(<BeerItem beer={this.state.sugAbv} />):null}
      {this.state.loadingIbu?(<BeerItem beer={this.state.sugEbc} />):null}
      </div>
    )
  }
}
