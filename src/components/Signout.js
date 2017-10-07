import React, { Component } from 'react';
import './Signout.css';

class Signout extends Component {  

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }


  componentWillUnmount() {
    console.log("Signout unmounting");
  }

  componentDidMount() {
    console.log("Signout mounted");
  }

  handleLogout() {
    this.props.parent.handleLogout();
  }

  render() {
    return (
      <div>
        <button className="loginBtn loginBtn--facebook" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Signout;
