import React, { Component } from 'react';
import './OrderHistory.css';

class OrderHistory extends Component {  

  componentWillUnmount() {
    console.log("OrderHistory unmounting");
  }

  componentDidMount() {
    console.log("OrderHistory mounted");
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2017-10-02</td>
              <td>Chicken Curry from Rishi's Chicken</td>
              <td>$7.00</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2017-10-02</td>
              <td>Chicken Curry from Rishi's Chicken</td>
              <td>$7.00</td>
              <td>Complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderHistory;
