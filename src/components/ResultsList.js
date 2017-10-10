import React, { Component } from 'react';
import './ResultsList.css';

class ResultsList extends Component {

  constructor(props) {
    super(props);
    this.onAddToCartButtonClick = this.onAddToCartButtonClick.bind(this);
    if (!JSON.parse(localStorage.getItem('cart'))) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  componentWillUnmount() {
    console.log("ResultsList unmounting");
  }

  componentDidMount() {
    console.log("ResultsList mounted");
  }

  onAddToCartButtonClick(data) {
    console.log("add to cart");
    console.log(data);
    var cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(data);
    localStorage.setItem('cart', JSON.stringify(cart));
    var searchParent = this.props.parent;
    searchParent.props.parent.updatePage("cart");
  }

  render() {
    console.log(JSON.parse(localStorage.getItem('searchResults')));
    var searchResults = JSON.parse(localStorage.getItem('searchResults'));
    var listItems = [];
    for(var i=0 ; i < searchResults.length ; i++) {
      listItems.push(<tr key={i}>
        <td><img alt="" src={searchResults[i].menuItem.image}></img></td>
        <td>{searchResults[i].menuItem.name} from {searchResults[i].kitchen.name}</td>
        <td>{searchResults[i].menuItem.price}</td>
        <td><button onClick={this.onAddToCartButtonClick.bind(null, searchResults[i])} className="btn btn-primary">Add to Cart</button></td>
        </tr>);
    }
    return (
      <table className="table searchResultsTable">
      <tbody>
      {listItems}
      </tbody>
      </table>
    );
  }
}

export default ResultsList;
