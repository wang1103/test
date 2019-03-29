import React, { Component } from 'react';
import './test.css'

class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "标题1",
      num: 0
    }
  }
  add = () => {
    let numA = 2
    this.setState({
      num: numA
    })
  }
  render() {
    return(
      <div>
        <h3 className="title">{this.state.title}</h3>
        {/* <label htmlFor="num" onClick={this.add}>++</label> */}
        {/* <input id="num" defaultValue={this.state.num} type="text" style={{color: "red"}} /> */}
      </div>
    )
  }
}
export default Test 