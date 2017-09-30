import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  
  constructor(props) {
    super(props);
    this.onCheckoutButtonClick = this.onCheckoutButtonClick.bind(this);
  }

  componentWillUnmount() {
    console.log("Cart unmounting");
  }

  componentDidMount() {
    console.log("Cart mounted");
  }

  getCartItemsForDisplay() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var items =  cart.items;
    console.log("Cart.getCartItemsForDisplay: cart items" + items);
    var ret = [];
    for(var i=0 ; i < items.length ; i++) {
       ret.push(<tr key={i}>
        <td>{items[i].name} from {items[i].kitchen}</td>
        <td>{items[i].quantity}</td>
        <td>{items[i].price}</td>
        </tr>);
    }
    return ret;
  }

  onCheckoutButtonClick() {
    this.props.parent.updatePage('checkout');
  }

  render() {
    return (
      <div className="cartDiv">
        <table className="cartTable">
        <tbody>
        <tr>
        <th></th>
        <th>Your Order Items</th>
        <th></th>
        </tr>
        <tr>
        <th>item</th>
        <th>Quantity</th>
        <th>Price</th>
        </tr>
        {this.getCartItemsForDisplay()}
        <tr>
        <th>cart total</th>
        <th></th>
        <th></th>
        </tr>
        <tr>
        <td><button className="cartButton">Continue Shopping</button></td>
        <td><button className="cartButton" onClick={this.onCheckoutButtonClick}>Checkout</button></td>
        <td><button className="cartButton">Clear All</button></td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
