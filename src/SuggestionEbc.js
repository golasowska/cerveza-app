import React from 'react';
import BeerItem from './BeerItem.js';

export default class Suggestion extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loadingEbc: false,
      sugEbc: []
    }
  };

  componentDidMount() {
      this.SetEbc();
  };


    SetEbc=()=>{
      const newEbcArr = this.props.allData.sort((a,b)=>{return a.ebc - b.ebc});
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
    return(<div>
        {this.state.loadingEbc? (<BeerItem beer={this.state.sugEbc} />):null}
      </div>
    )
  }
}
