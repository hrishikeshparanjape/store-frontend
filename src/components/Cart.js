import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  
  constructor(props) {
    super(props);
    this.onCheckoutButtonClick = this.onCheckoutButtonClick.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);
    this.goToSearchPage = this.goToSearchPage.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
  }

  componentWillUnmount() {
    console.log("Cart unmounting");
  }

  componentDidMount() {
    console.log("Cart mounted");
  }

  onQuantityChange(cartItemIndex, event) {
    console.log(event.target.value);
    console.log(cartItemIndex);
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart[cartItemIndex].menuItem.quantity = event.target.value;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.forceUpdate();
  }

  onRemoveButtonClick(cartItemIndex) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(cartItemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.forceUpdate();
  }

  goToSearchPage() {
    this.props.parent.updatePage("home");
  }

  getCartSubTotal() {
    var ret = 0;
    var cart = JSON.parse(localStorage.getItem('cart'));
    for(var i=0 ; i < cart.length ; i++) {
      ret = ret + this.getLineItemPriceInFloat(cart[i].menuItem.price, cart[i].menuItem.quantity);
    }
    var currency = cart[0].menuItem.price.substring(0,1);
    return currency + ret.toFixed(2);
  }

  getLineItemPrice(price, quantity) {
    var currency = price.substring(0,1);
    return currency + this.getLineItemPriceInFloat(price, quantity).toString();
  }

  getLineItemPriceInFloat(price, quantity) {
    return parseFloat((parseFloat(price.substring(1)) * quantity).toFixed(2));
  }

  emptyCart() {
    return(
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Empty Cart</h1>
        <p className="lead">You have an empty cart. <button onClick={this.goToSearchPage} className="btn btn-primary">Lets find something else to eat!</button></p>
      </div>
      </div>
      )
  }

  getCartItemsForDisplay() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var ret = [];
    console.log("cart=");
    console.log(cart);
    for(var i=0 ; i < cart.length ; i++) {
       ret.push(
         <div key={i} className="product">
         <div className="product-image">
            <img alt="" src={cart[i].menuItem.image} />
         </div>
         <div className="product-details">
            <div className="product-title">{cart[i].menuItem.name}</div>
            <p className="product-description">From {cart[i].kitchen.name}</p>
         </div>
         <div className="product-price">{cart[i].menuItem.price}</div>
         <div className="product-quantity">
            <input type="number" value={cart[i].menuItem.quantity} min="1" onChange={this.onQuantityChange.bind(this, i)}/>
         </div>
         <div className="product-removal">
            <button className="remove-product" onClick={this.onRemoveButtonClick.bind(null, i)}>
            Remove
            </button>
         </div>
         <div className="product-line-price">{this.getLineItemPrice(cart[i].menuItem.price, cart[i].menuItem.quantity)}</div>
      </div>);
    }
    return ret;
  }

  onCheckoutButtonClick() {
    this.props.parent.updatePage('checkout');
  }

  render() {
    var cartItems = this.getCartItemsForDisplay();
    if(cartItems.length === 0) {
      return this.emptyCart();
    } else {
    return (
<div className="shopping-cart-container">
   <div className="shopping-cart">
      <div className="column-labels">
         <label className="product-image label-in-cart">Image</label>
         <label className="product-details label-in-cart">Product</label>
         <label className="product-price label-in-cart">Price</label>
         <label className="product-quantity label-in-cart">Quantity</label>
         <label className="product-removal label-in-cart">Remove</label>
         <label className="product-line-price label-in-cart">Total</label>
      </div>
      {cartItems}
      <div className="totals">
         <div className="totals-item">
            <label className="label-in-cart">Subtotal</label>
            <div className="totals-value" id="cart-subtotal">{this.getCartSubTotal()}</div>
         </div>
         <div className="totals-item">
            <label className="label-in-cart">Tax (0%)</label>
            <div className="totals-value" id="cart-tax">0.00</div>
         </div>
         <div className="totals-item">
            <label className="label-in-cart">Shipping/Delivery</label>
            <div className="totals-value" id="cart-shipping">0.00</div>
         </div>
         <div className="totals-item totals-item-total">
            <label className="label-in-cart">Grand Total</label>
            <div className="totals-value" id="cart-total">{this.getCartSubTotal()}</div>
         </div>
      </div>
      <button onClick={this.onCheckoutButtonClick} className="checkout">Checkout</button>
      <button onClick={this.goToSearchPage} className="keep-shopping">Keep Shopping</button>
   </div>
</div>
    );
}
  }
}

export default Cart;
