import React, { Component } from 'react';

class User extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userMsg: '跟人中心'
    }
  };
  render() {
    return (
      <div>
        <h2>{ this.state.userMsg }</h2>
      </div>
    )
  };
}

export default User