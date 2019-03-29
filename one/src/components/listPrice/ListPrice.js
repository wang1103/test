import React, {Component} from 'react';

class ListPrice extends Component{
  constructor(props) {
    super(props);
    this.state = {
      price: ''
    }
  }
  render() {
    return(
      <div>
        <h2>{ this.state.price }</h2>
      </div>
    )
  }
}

export default ListPrice