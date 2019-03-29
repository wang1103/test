import React, {Component} from 'react';
import url from 'url'

class ListDetail extends Component{
  constructor(props) {
    super(props);
    
    console.log(this.props,url.parse(this.props.location.search,true).query.id)
    this.state = {
      desc: url.parse(this.props.location.search,true).query.id
    }
  };
  buy = () => {
    // this
  }
  render() {
    return(
      <div>
        <h2 onClick={this.buy}>{ this.state.desc }</h2>
      </div>
    )
  }
}

export default ListDetail