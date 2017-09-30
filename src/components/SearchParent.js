import React, { Component } from 'react';
import './SearchParent.css';
import Search from './Search';
import ResultsList from './ResultsList';

class SearchParent extends Component {

  constructor(props) {
    super(props);
    this.state = { searchResults: [] };
  }

  componentWillUnmount() {
    console.log("SearchParent unmounting");
  }

  componentDidMount() {
    console.log("SearchParent mounted");
  }

  updateSearchResults(newValue) {
    this.setState({
      searchResults: newValue,
    });
  }

  openCartPage(){
    this.props.parent.updatePage("cart");
  }

  render() {
    return (
      <div>
        <Search parent={this} updateSearchResults={this.updateSearchResults.bind(this)}/>
        <ResultsList parent={this} searchResults={this.state.searchResults} updateSearchResults={this.updateSearchResults.bind(this)}/>
      </div>
    );
  }
}

export default SearchParent;
