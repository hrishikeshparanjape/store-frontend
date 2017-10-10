import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    this.onFindButtonClick = this.onFindButtonClick.bind(this);
    if (!JSON.parse(localStorage.getItem('searchResults'))) {
      localStorage.setItem('searchResults', JSON.stringify([]));
    }
  }

  onFindButtonClick(event) {
    var results = [
      {
        menuItem: {
          name: "Chicken Curry 1",
          price: "$5.49",
          image: "https://www.onceuponachef.com/images/2012/02/chicken-curry-575x437.jpg",
          quantity: "1"
        },
        kitchen: {
          name:"Rishi's kitchen"
        }
      },
      {
        menuItem: {
          quantity: "1",
          name: "Chicken Curry 2",
          price: "$5.49",
          image: "https://www.onceuponachef.com/images/2012/02/chicken-curry-575x437.jpg"
        },
        kitchen: {
          name:"Rishi's kitchen"
        }
      },
      {
        menuItem: {
          quantity: "1",
          name: "Chicken Curry 3",
          price: "$5.49",
          image: "https://www.onceuponachef.com/images/2012/02/chicken-curry-575x437.jpg"
        },
        kitchen: {
          name:"Rishi's kitchen"
        }
      },
      {
        menuItem: {
          quantity: "1",
          name: "Chicken Curry 4",
          price: "$5.49",
          image: "https://www.onceuponachef.com/images/2012/02/chicken-curry-575x437.jpg"
        },
        kitchen: {
          name:"Rishi's kitchen"
        }
      },
      {
        menuItem: {
          quantity: "1",
          name: "Chicken Curry 5",
          price: "$5.49",
          image: "https://www.onceuponachef.com/images/2012/02/chicken-curry-575x437.jpg"
        },
        kitchen: {
          name:"Rishi's kitchen"
        }
      },
      {
        menuItem: {
          quantity: "1",
          name: "Chicken Curry 6",
          price: "$5.49",
          image: "https://www.onceuponachef.com/images/2012/02/chicken-curry-575x437.jpg"
        },
        kitchen: {
          name:"Rishi's kitchen"
        }
      }
    ];
    localStorage.setItem('searchResults', JSON.stringify(results));
    this.props.parent.forceUpdate();
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
        <table className="table searchTable borderless">
          <thead>
            <tr>
              <th>Address</th>
              <th>Food Type</th> 
              <th> </th>
            </tr>
          </thead>
          <tbody>
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
              <button className="btn btn-primary" onClick={this.onFindButtonClick}> Find </button>
            </td>
          </tr>
          </tbody>
        </table>
    );
  }
}

export default Search;
