import React, { Component } from 'react';
import './PaymentMethods.css';
import CreditCard from './CreditCard';

class PaymentMethods extends Component {  

  componentWillUnmount() {
    console.log("PaymentMethods unmounting");
  }

  componentDidMount() {
    console.log("PaymentMethods mounted");
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Credit Card</th>
              <th>Expiry</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>************1234</td>
              <td>05/2022</td>
              <td><button type="button" className="btn btn-primary">Remove</button></td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p>
                  <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Add New
                  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <CreditCard />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PaymentMethods;
