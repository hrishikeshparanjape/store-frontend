import React, { Component } from 'react';
import './SearchParent.css';
import Search from './Search';
import ResultsList from './ResultsList';

class SearchParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  componentWillUnmount() {
    console.log("SearchParent unmounting");
  }

  componentDidMount() {
    console.log("SearchParent mounted");
  }

  render() {
    return (
      <div>
        <Search parent={this}/>
        <ResultsList parent={this}/>
      </div>
    );
  }
}

export default SearchParent;
