import React, { Component } from 'react';
import './Checkout.css';

class Checkout extends Component {

  componentWillUnmount() {
    console.log("Checkout unmounting");
  }

  componentDidMount() {
    console.log("Checkout mounted");
    if (!this.isFacebookConnected()) {
      this.props.parent.updatePage("loginsignup");
    }

  }

  isFacebookConnected() {
    var fbstatus = JSON.parse(localStorage.getItem('fbstatus'));
    if (!fbstatus || fbstatus.status !== "connected") {
      return false;
    } else {
      return true;
    }
  }

  getCartSubTotal() {
    var ret = 0;
    var cart = JSON.parse(localStorage.getItem('cart'));
    for(var i=0 ; i < cart.length ; i++) {
      ret = ret + this.getLineItemPriceInFloat(cart[i].menuItem.price, cart[i].menuItem.quantity);
    }
    var currency = cart[0].menuItem.price.substring(0,1);
    return currency + ret.toString();
  }

  getLineItemPriceInFloat(price, quantity) {
    return parseFloat((parseFloat(price.substring(1)) * quantity).toFixed(2));
  }


  populateSavedCards() {
if (true) {
    return (
            <table className="table table-responsive payment-methods-table">
     <thead>
         <tr>
             <th>Card</th>
             <th>Expiry</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>
                 <div className="radio">
                     <label><input type="radio" id='regular' name="optradio" data-toggle="collapse" data-target=".collapsePaymentDetails.in" />Ending with 1234</label>
                 </div>
             </td>
             <td>
             <div className="radiotext">
                 <label htmlFor='regular'>02/21</label>
             </div>
             </td>
         </tr>
         <tr>
             <td>
                 <div className="radio">
                     <label><input type="radio" id='express' name="optradio" data-toggle="collapse" data-target=".collapsePaymentDetails.in"/>Ending with 0234</label>
                </div>
             </td>
             <td>
                 <div className="radiotext">
                     <label htmlFor='express'>05/22</label>
                 </div>
             </td>
         </tr>
         <tr>
             <td>
                 <div className="radio">
                     <label><input defaultChecked="true" type="radio" id='newcard' name="optradio" data-toggle="collapse" data-target=".collapsePaymentDetails:not(.in)" />Use a different card</label>
                </div>
             </td>
              <td>
                 <div className="radiotext">
                     <label htmlFor='newcard'>     </label>
                 </div>
             </td>
         </tr>
         </tbody>
</table>

      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="checkoutDiv">


      <div className="checkoutContainer">
        <div id="Checkout" className="inline">
      <h1><button onClick={() => this.props.parent.updatePage("cart")} className="btn btn-primary pull-left">Back To Cart</button>Pay Invoice</h1>
      <div className="card-row">
          <span className="visa"></span>
          <span className="mastercard"></span>
          <span className="amex"></span>
          <span className="discover"></span>
      </div>
      <div className="credit-card-form">
          <div className="form-group">
              <label className="checkoutLabel" htmlFor="PaymentAmount">Payment amount</label>
              <div className="amount-placeholder">
                  <span>{this.getCartSubTotal()}</span>
              </div>
          </div>
          {this.populateSavedCards()}
          <div className="collapsePaymentDetails collapse in">

            <div className="card card-body">



          <div className="form-group">
              <label className="checkoutLabel" htmlFor="NameOnCard">Name on card</label>
              <input id="NameOnCard" className="form-control" type="text" maxLength="255"></input>
          </div>
          <div className="form-group">
              <label className="checkoutLabel" htmlFor="CreditCardNumber">Card number</label>
              <input id="CreditCardNumber" className="null card-image form-control" type="text"></input>
          </div>
          <div className="expiry-date-group form-group">
              <label className="checkoutLabel" htmlFor="ExpiryDate">Expiry date</label>
              <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" maxLength="7"></input>
          </div>
          <div className="security-code-group form-group">
              <label className="checkoutLabel" htmlFor="SecurityCode">Security code</label>
              <div className="input-container" >
                  <input id="SecurityCode" className="form-control" type="text" ></input>
                  <i id="cvc" className="fa fa-question-circle"></i>
              </div>
              <div className="cvc-preview-container two-card hide">
                  <div className="amex-cvc-preview"></div>
                  <div className="visa-mc-dis-cvc-preview"></div>
              </div>
          </div>
          <div className="zip-code-group form-group">
              <label className="checkoutLabel" htmlFor="ZIPCode">ZIP/Postal code</label>
              <div className="input-container">
                  <input id="ZIPCode" className="form-control" type="text" maxLength="10"></input>
                  <a tabIndex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i className="fa fa-question-circle"></i></a>
              </div>
          </div>

            </div>
          </div>


          <button id="PayButton" className="btn btn-block btn-success submit-button">
              <span className="submit-button-lock"></span>
              <span className="align-middle">Pay {this.getCartSubTotal()}</span>
          </button>
      </div>
  </div>
</div>
      </div>
    );
  }
}

export default Checkout;
