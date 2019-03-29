import React, {Component} from 'react';
 

class Footer extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        底部
        <h2 onClick={this.props.all.show} ref="jiao">{this.props.all.state.title}</h2>
      </div>
    )
  }
}

export default Footer