import React, { Component } from 'react'

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "标题",
      iVal: '',
      list: [
        {
          text: "1",
          is: true
        },
        {
          text: "2",
          is: false
        }
      ]
    }
  }
  inputEnter = (keywords) => {
    if(keywords.keyCode === 13) {
      console.log(this.state.iVal);
      let tempList = this.state.list;
      tempList.push({
        text: this.state.iVal,
        is: false
      });
      this.refs.itv.value = "";
      this.setState({
        list: tempList
      })
    }
  }
  inputChange = (e) => {
    this.setState({
      iVal: e.target.value
    })
  }
  changeStatus = (key) => {
    console.log(key)
    let tempList = this.state.list;
    tempList[key].is = !tempList[key].is;
    this.setState({
      list: tempList
    })
  }
  render() {
    return (
      <header>
        {this.props.title}
        <input type="text" ref="itv" onKeyUp={this.inputEnter} onChange={this.inputChange} />
        <ul className="left">
          {this.state.list.map((val,key) => {
            if(val.is) {
              return <li key={key} onClick={this.changeStatus.bind(this,key)}>{val.text}</li>
            }
          })}
        </ul>
        <ul className="right">
          {this.state.list.map((val,key) => {
            if(!val.is) {
              return <li key={key} onClick={this.changeStatus.bind(this,key)}>{val.text}</li>
            }
          })}
        </ul>
      </header>
    )
  }
}

export default Header