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
    let newIndex=null;
    const id=this.props.detailData.id;
    Object.getOwnPropertyNames(newIbuArr).forEach(
      (val, idx, array)=>{
        idArr.push( newIbuArr[val].id);
      }
    );
    if (idArr.indexOf(id)===(newIbuArr.length-1)) {
      newIndex = idArr.indexOf(id) -1;
    } else {
      newIndex = idArr.indexOf(id) +1;
    };

    const sugIbu = newIbuArr[newIndex];

      this.setState({
        sugIbu,
        loadingIbu: true
      });
    };

    SetAbv=()=>{
      const newAbvArr = this.state.allData.sort((a,b)=>{return a.abv-b.abv});
      let idArr = [];
      let newIndex=null;
      const id = this.props.detailData.id;
      Object.getOwnPropertyNames(newAbvArr).forEach(
        (val, idx, array)=>{
          idArr.push( newAbvArr[val].id);
        }
      );

      if (idArr.indexOf(id)===(newAbvArr.length-1)) {
        newIndex = idArr.indexOf(id) -1;
      } else {
        newIndex = idArr.indexOf(id) +1;
      }
      const sugAbv= newAbvArr[newIndex];

      this.setState({
        sugAbv,
        loadingAbv: true
      })
    };

    SetEbc=()=>{
      const newEbcArr = this.state.allData.sort((a,b)=>{return a.ebc - b.ebc});
      let idArr = [];
      let newIndex=null;
      const id = this.props.detailData.id;
      Object.getOwnPropertyNames(newEbcArr).forEach(
        (val, idx, array)=>{
          idArr.push( newEbcArr[val].id);
        }
      );
      if (idArr.indexOf(id)===(newEbcArr.length-1)) {
        newIndex = idArr.indexOf(id) -1;
      } else {
        newIndex = idArr.indexOf(id) +1;
      };
      const sugEbc = newEbcArr[newIndex];

      this.setState({
        sugEbc,
        loadingEbc: true
      })
    };


  render(){
    return(<div className='container'>
      <div className='row justify-content-center'>
      <button className='btn btn-outline-info'
        onClick={this.showSuggestion}
        style={{display: this.state.display}}
        >You might also like</button>
      {this.state.loadingIbu?(<BeerItem beer={this.state.sugIbu} />):null}
      {this.state.loadingIbu?(<BeerItem beer={this.state.sugAbv} />):null}
      {this.state.loadingIbu?(<BeerItem beer={this.state.sugEbc} />):null}
      </div>
      </div>
    )
  }
}
