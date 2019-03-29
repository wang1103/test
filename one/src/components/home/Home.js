import React, { Component } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import './home.css'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pNum: 1,
      val: 123,
      title: 'Home'
    }
  }
  show = ()=> {
    this.setState({
      val: 456
    })
    console.log(this.refs.footer.refs)
  }
  render() {
    return(
      <div>
        <Header title={this.state.title} />
        <p className="red" onClick={this.show}>{this.state.val}</p>
        <label htmlFor="val">数字</label>
        {/* <input id="val" type="text" value={this.state.val} /> */}
        <Footer all={this} ref="footer" />
      </div>
     )
  }
}

export default Home