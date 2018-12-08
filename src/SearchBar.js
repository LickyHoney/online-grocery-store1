import React, { Component } from 'react';
import ProductList from './containers/ProductList';
import Cart from './containers/Cart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {search} from './actions';
export const search = 'SEARCH';

class SearchBar extends Component {
  render() {
    const {search, value} = this.props;

    return (
        <input
          className="form-control"
          placeholder = "Search"
          onChange={(e) => search(e.target.value)}
          value={value} />
          
          /*<form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={(e) => search(e.target.value)} value={value}/>
        </fieldset>
        </form>*/
    );
  }
} 

function mapStateToProps({products}) {
  return {value: products.value};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);