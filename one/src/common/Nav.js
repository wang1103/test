
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/list',
          name: '列表'
        },
        {
          path: '/user',
          name: '用户'
        }
      ]
    }
  };
  render() {
    return (
      <div>
        {this.state.navList.map((val,key) => {
          return <Link to={val.path} key={key}>{val.name}</Link>
        })}
      </div>
    )
  }
}

export default Nav;