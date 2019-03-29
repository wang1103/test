import React, { Component } from 'react';
import { Link } from "react-router-dom";

class List extends Component{
  constructor(props) {
    super(props);
    this.state = {
      listArr: [
        {
          name: '张三',
          age: 18
        },
        {
          name: '李四',
          age: 10
        },
        {
          name: '王二',
          age: 31
        },
        {
          name: '麻子',
          age: 15
        },
        {
          name: '李白',
          age: 3218
        }
      ]
    }
  };
  render() {
    return (
      <div>
        <ul>
          {
            this.state.listArr.map((val,key) => {
              return <li key={key} onClick={this.goDetail}><Link to={`/listDetail?id=${val.name}`}>这是{val.name}, 今年{val.age}岁</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default List