import React, { Component } from 'react';
import './Receipt.css';

class Receipt extends Component {

  componentWillUnmount() {
    console.log("Receipt unmounting");
  }

  componentDidMount() {
    console.log("Receipt mounted");
  }

  render() {
    return (
      <div className="receiptDiv">
      </div>
    );
  }
}

export default Receipt;
