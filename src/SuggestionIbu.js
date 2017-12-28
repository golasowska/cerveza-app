import React from 'react';
import BeerItem from './BeerItem.js';

export default class Suggestion extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loadingIbu: false,
      sugIbu: [],
    }
  };

  componentDidMount() {
      this.setIbu();
  };

  SetIbu=()=>{
    const newIbuArr = this.props.allData.sort((a,b)=>{return a.ibu-b.ibu});
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

  render(){
    return(<div>
        {this.state.loadingIbu?(<BeerItem beer = {this.state.sugIbu} />):null}
      </div>
    )
  }
}
