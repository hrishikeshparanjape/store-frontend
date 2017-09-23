import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  componentDidMount() {
    console.log("mounted");
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
                <button className="findButton"> Find </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
