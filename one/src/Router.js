import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Acom from "./components/home/Home"
import Bcom from "./components/test/Test"


// class RouterMenu extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() {
  function RouterMenu(){
    return(
      <Router>
        <div>
          <Link to="/a">A</Link>
          <Link to="/b">B</Link>

          <hr />

          <Route exact path="/" component={Acom} />
          <Route path="/a" conponent={Acom} />
          <Route path="/b" conponent={Bcom} />
        </div>
      </Router>
    )
  }
// }

export default RouterMenu