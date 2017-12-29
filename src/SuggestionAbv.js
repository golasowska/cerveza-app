import React from 'react';
import BeerItem from './BeerItem.js';

export default class Suggestion extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loadingAbv: false,
      sugAbv: []
    }
  };

  componentDidMount() {
      this.SetAbv();
  };

    SetAbv=()=>{
      const newAbvArr = this.props.allData.sort((a,b)=>{return a.abv-b.abv});
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

  render(){
    return(<div>
      {this.state.loadingAbv? (<BeerItem beer={this.state.sugAbv} />): null}
      </div>
    )
  }
}
