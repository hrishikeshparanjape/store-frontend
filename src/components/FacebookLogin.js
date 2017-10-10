import React, { Component } from 'react';
import './FacebookLogin.css';
import Profile from './Profile';
import OrderHistory from './OrderHistory';
import Signout from './Signout';
import PaymentMethods from './PaymentMethods';

class FacebookLogin extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.checkFBStatus = this.checkFBStatus.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onFacebookLoginStatusReceived = this.onFacebookLoginStatusReceived.bind(this);
    window.addEventListener('facebook-login-status', this.onFacebookLoginStatusReceived);
  }

  componentWillUnmount() {
    window.removeEventListener('facebook-login-status', this.onFacebookLoginStatusReceived);
    console.log("FacebookLogin unmounting");
  }

  componentDidMount() {
    this.checkFBStatus();
    window.addEventListener('facebook-login-status', this.onFacebookLoginStatusReceived);
    console.log("FacebookLogin mounted");
  }

  onFacebookLoginStatusReceived(event) {
    switch(event.detail) {
      case "connected" :
        this.setState({ loggedIn : true })
      break;
      case "not_authorized":
        this.setState({ loggedIn : false })
      break;
      case "not_connected":
        this.setState({ loggedIn : false })
      break;
      default:
        this.setState({ loggedIn : false })
    }
  }

  handleLogin() {
    console.log("login");
    window.FB.login(function(response){
      if (response.status === 'connected') {
        var event = new CustomEvent('facebook-login-status', { detail: "connected" });
        window.dispatchEvent(event);
      }
    });
  }

  handleSignup() {
    console.log("signup");
    window.FB.login(function(response){
      if (response.status === 'connected') {
        var event = new CustomEvent('facebook-login-status', { detail: "connected" });
        window.dispatchEvent(event);
      }
    });
  }

  handleLogout() {
    console.log("logout");
    window.FB.logout(function(response) {
      if (response.status !== 'connected') {
        var event = new CustomEvent('facebook-login-status', { detail: "not_connected" });
        window.dispatchEvent(event);
      }
    });
  }

  checkFBStatus() {
    window.FB.getLoginStatus(function(response) {
      var event;
      if (response.status === 'connected') {
          // the user is logged in and has authenticated your
          // app, and response.authResponse supplies
          // the user's ID, a valid access token, a signed
          // request, and the time the access token 
          // and signed request each expire
        console.log("connected");
        event = new CustomEvent('facebook-login-status', { detail: "connected" });
          //var uid = response.authResponse.userID;
          //var accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
          // the user is logged in to Facebook, 
          // but has not authenticated your app
        console.log("not_authorized");
        event = new CustomEvent('facebook-login-status', { detail: "not_authorized" });
      } else {
          // the user isn't logged in to Facebook.
        console.log("not_connected");
        event = new CustomEvent('facebook-login-status', { detail: "not_connected" });
      }
      window.dispatchEvent(event);
    });
  }

  render() {
    return (
      <div>
        { !this.state.loggedIn ?
        (<div className="outer">
          <div className="wrap">
            <div className="sub">
              <button className="loginBtn loginBtn--facebook" onClick={this.handleSignup}>
                Signup with Facebook
              </button>
            </div>
            <div className="sub">
              <button className="loginBtn loginBtn--facebook" onClick={this.handleLogin}>
                Login with Facebook
              </button>
            </div>
          </div>
        </div>)
        :
      	(

<div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      <div className="tabbable">
        <ul className="nav nav-pills nav-stacked col-md-3">
          <li className="active"><a href="#a" data-toggle="tab">Profile</a></li>
          <li><a href="#b" data-toggle="tab">Order History</a></li>
          <li><a href="#c" data-toggle="tab">Payment Methods</a></li>
          <li><a href="#d" data-toggle="tab">Log Out</a></li>
        </ul>
        <div className="tab-content col-md-9">
          <div className="tab-pane active" id="a">
            <Profile />
          </div>
          <div className="tab-pane" id="b">
            <OrderHistory />
          </div>
          <div className="tab-pane" id="c">
            <PaymentMethods />
          </div>
          <div className="tab-pane" id="d">
            <Signout parent={this}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          )}





      </div>);
  }
}

export default FacebookLogin;
