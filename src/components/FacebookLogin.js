import React, { Component } from 'react';
import './FacebookLogin.css';
import Profile from './Profile';
import OrderHistory from './OrderHistory';
import Signout from './Signout';
import PaymentMethods from './PaymentMethods';

class FacebookLogin extends Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillUnmount() {
    console.log("FacebookLogin unmounting");
  }

  componentDidMount() {
    console.log("FacebookLogin mounted");
    if (!this.isFacebookConnected()) {
      this.props.parent.updatePage("loginsignup");
    }
  }

  handleLogout() {
    console.log("logout");
    var that = this;
    window.FB.logout(function(response) {
      if (response.status !== 'connected') {
        var fbstatus = { status: "not_connected" , data: null };
        localStorage.setItem('fbstatus', JSON.stringify(fbstatus));
        window.location.reload();
      }
    });
  }

  isFacebookConnected() {
    var fbstatus = JSON.parse(localStorage.getItem('fbstatus'));
    if (!fbstatus || fbstatus.status !== "connected") {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
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
);
  }
}

export default FacebookLogin;
