import React, { Component } from 'react';
import './App.css';

import FacebookLogin from './components/FacebookLogin';
import SearchParent from './components/SearchParent';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import LoginSignup from './components/LoginSignup';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 'home' };
    this.onHomeButtonClick = this.onHomeButtonClick.bind(this);
    this.onMyAccountButtonClick = this.onMyAccountButtonClick.bind(this);
    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.onHashChange, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChange, false);
  }

  onHashChange(event) {
    console.log(this.state.page + ":" + event.newURL);
    if (event.newURL.includes("login")) {
      this.setState({ page : 'login' })
    } else if (event.newURL.includes("home")) {
      this.setState({ page : 'home' })
    } else if (event.newURL.includes("cart")) {
      this.setState({ page : 'cart' })
    } else if (event.newURL.includes("checkout")) {
      this.setState({ page : 'checkout' })
    } else if (event.newURL.includes("loginsignup")) {
      this.setState({ page : 'loginsignup' })
    } else {
      this.setState({ page : 'home' })
    }
  }

  onHomeButtonClick() {
    if (this.state.page !== 'home') {
      this.setState({ page : 'home' })
      window.location.href = "#home";
    }
  }
  
  onMyAccountButtonClick(){
    if (this.state.page !== 'login') {
      this.setState({ page : 'login' })
      window.location.href = "#login";
    }
  }

  updatePage(newPage) {
    window.location.href = "#" + newPage;
    this.setState({ page : newPage })
  }

  getLocationHash() {
    if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      return hash;
      // hash found
    } else {
      // No hash found
      return null;
    }
  }

  pageToRender(state) {
    switch(this.getLocationHash()) {
      case "login":
        return (<FacebookLogin parent={this} />);
      case "home":
        return (<SearchParent parent={this} />);
      case "cart":
        return (<Cart parent={this} />);
      case "checkout":
        return (<Checkout parent={this} />); 
      case "loginsignup":
        return (<LoginSignup parent={this} />); 
      default:
        return (<SearchParent parent={this} />);
    }
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a onClick={this.onHomeButtonClick} className="navbar-brand logoLink">
                <img alt="Brand"/>
              </a>              
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a className="myAccountLink" onClick={this.onMyAccountButtonClick}><span className="glyphicon glyphicon-user"></span> My Account</a></li>
            </ul>            
          </div>
        </nav>
        <div className="App-content">
          {this.pageToRender(this.state)}
        </div>
      </div>
    );
  }
}

export default App;
