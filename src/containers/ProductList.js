import { connect } from 'react-redux';
import ProductList from '../ProductList';
import { getProducts } from './products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);



/*import React from 'react';
import PropTypes from 'prop-types';
import Product from '../containers/Product';

class ProductList extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            filtered_products: [],
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
}

     const componentDidMount = () => {
        this.setState({
           filtered_products: this.props.products
        })
     }

    const componentWillReceiveProps = (nextProps) => {
        this.setState({
            filtered_products: nextProps.products
        })
}
    
    const handle_search = (event) => {
        // Variable to hold the original version of the list
    let currentList = [];
        // Variable to hold the filtered list before putting into state
    let newList = [];

        // If the search bar isn't empty
    if (event.target.value !== "") {
            // Assign the original product list to currentList
      currentList = this.props.products;

            // Use .filter() to determine which products should be displayed
            // based on the search terms
      newList = currentList.filter(product => {
                // change current product to lowercase
        const lc = product.toLowerCase();
                // change search term to lowercase
        const filter = event.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.products;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered_products: newList
    });
  };
                
    

    
       const {products: products} = this.props;
       console.log("products", products );
       const Search = () => (
           <div>
         <input
          className="form-control"
          placeholder = "Search"
         onchange = {this.handle_search} />
            <h3>Products</h3>
            <ul className="product-list">
              {this.state.filtered_prodcuts.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul></div>
       
    );



ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
*/

