import React, { Component } from 'react';
import './ResultsList.css';

class ResultsList extends Component {

  constructor(props) {
    super(props);
    this.onAddToCartButtonClick = this.onAddToCartButtonClick.bind(this);
  }

  componentWillUnmount() {
    console.log("ResultsList unmounting");
  }

  componentDidMount() {
    console.log("ResultsList mounted");
  }

  onAddToCartButtonClick(event) {
    console.log(event);
    localStorage.setItem("cart" , JSON.stringify({
     items: [
      {
        id: 1,
        name: "Chicken Curry",
        kitchen: "Rishi's kitchen",
        quantity: 1,
        price: "$5.49"
      }
     ] 
    }))
    this.props.parent.openCartPage();
  }

  render() {
    console.log(this.props);
    var listItems = [];
    for(var i=0 ; i < this.props.searchResults.length ; i++) {
      listItems.push(<tr key={i}>
        <td><img alt="" src={this.props.searchResults[i].menuItem.image}></img></td>
        <td>{this.props.searchResults[i].menuItem.name} from {this.props.searchResults[i].kitchen.name}</td>
        <td>{this.props.searchResults[i].menuItem.price}</td>
        <td><button onClick={this.onAddToCartButtonClick} className="btn btn-primary">Add to Cart</button></td>
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
