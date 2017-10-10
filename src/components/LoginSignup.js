import React, { Component } from 'react';
import './LoginSignup.css';

class LoginSignup extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillUnmount() {
    console.log("LoginSignup unmounting");
  }

  componentDidMount() {
    console.log("LoginSignup mounted");
  }

  handleLogin() {
    console.log(this);
    var that = this;
    window.FB.login(function(response){
      if (response.status === 'connected') {
        var fbstatus = { status: "connected" , data: {
          uid: response.authResponse.userID,
          accessToken: response.authResponse.accessToken
        }};
        localStorage.setItem('fbstatus', JSON.stringify(fbstatus));
        that.props.parent.updatePage("cart");
      }
    })
  }

  render() {
    return (<div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Let us get you started</h1>
        <p className="lead">              
          <button onClick={this.handleLogin} className="loginBtn loginBtn--facebook" onClick={this.handleLogin}>
            Login with Facebook
          </button>
        </p>
      </div>
    </div>);
  }
}

export default LoginSignup;
