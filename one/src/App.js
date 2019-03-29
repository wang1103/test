import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Home from './components/home/Home'
import List from './components/list/List'
import ListDetail from './components/listDetail/ListDetail'
import ListPrice from './components/listPrice/ListPrice'
import User from './components/user/User'
import Nav from './common/Nav'
// import RouterMenu from './Router'
const setTitle = (t) => document.title = t;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} onUpdate={setTitle('首页')} />
          <Route path="/list">
            <Route exact path=""  component={List}></Route>
            <Route path="/listDetail" component={ListDetail}></Route>
            <Route path="/listPrice" component={ListPrice}></Route>
          </Route>
          <Route path="/user" component={User} onEnter={setTitle("中心")} />
        </div>
      </Router>
    );
  }
}

export default App;
