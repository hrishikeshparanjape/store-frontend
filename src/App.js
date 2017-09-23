import React, { Component } from 'react';
import './App.css';

import FacebookLogin from './components/FacebookLogin';
import Home from './components/Home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 'home' };
    this.onHomeButtonClick = this.onHomeButtonClick.bind(this);
    this.onMyAccountButtonClick = this.onMyAccountButtonClick.bind(this);
    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : '306616429735707',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
      });
      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.addEventListener("hashchange", this.onHashChange, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChange, false);
  }

  onHashChange(event) {
    if (this.state.page !== 'login' && event.newURL.includes("login")) {
      this.setState({ page : 'login' })
    } else if (this.state.page !== 'home' && event.newURL.includes("home")) {
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
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Logo">
            <a onClick={this.onHomeButtonClick}>Welcome to React</a>
          </div>
          <div className="MyAccount">
            <a onClick={this.onMyAccountButtonClick}>My Account</a>
          </div>
        </div>
        <div className="App-content">
          {this.state.page === 'login' ? 
            (<FacebookLogin />) 
            : 
            (<Home />)
          }
        </div>
        <div className="App-footer">
        </div>  
      </div>
    );
  }
}

export default App;
