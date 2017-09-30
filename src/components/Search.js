import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    this.onFindButtonClick = this.onFindButtonClick.bind(this);
  }

  onFindButtonClick(event) {
    this.props.updateSearchResults([
      {
        menuItem: {
          name: "Chicken Curry",
          price: "$5.49",
          image: "https://www.onceuponachef.com/images/2012/02/chicken-curry-575x437.jpg"
        },
        kitchen: {
          name:"Rishi's kitchen"
        }
      }
    ]);
  }

  componentWillUnmount() {
    console.log("Search unmounting");
  }

  componentDidMount() {
    console.log("Search mounted");
  }

  onSuggestSelect(suggest){
    this._geoSuggest.blur();
  }

  render() {
    return (
      <div className="searchTableDiv">
        <table className="searchTable">
        <tbody>
          <tr>
            <th>Address</th>
            <th>Food Type</th> 
            <th> </th>
          </tr>
          <tr>
            <td>        
              <div className="addressTextFieldDiv">
                <Geosuggest
                  ref={el=>this._geoSuggest=el}
                  suggestItemActiveClassName = "addressSuggestionListItemActive" 
                  suggestItemClassName = "addressSuggestionListItem" 
                  suggestsClassName="addressSuggestionList" 
                  inputClassName="addressTextField"
                  onSuggestSelect={this.onSuggestSelect}></Geosuggest>
              </div>
            </td>
            <td>
              <div className="categoryTextFieldDiv">
                <input className="categoryTextField" type="text"></input>
              </div>
            </td> 
            <td>
              <div className="findButtonDiv">
                <button className="findButton" onClick={this.onFindButtonClick}> Find </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
