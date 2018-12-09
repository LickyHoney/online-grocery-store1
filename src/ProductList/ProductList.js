/*import React from 'react';
import PropTypes from 'prop-types';
import Product from '../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;*/

import React from 'react';
import PropTypes from 'prop-types';
import Product from '../containers/Product';



class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered_products: [],
            
        };
        
        this.handle_search = this.handle_search.bind(this);
    }

// selectors

/*componentWillMount() {
    this.getProducts();
  }*/

     componentDidMount() {
        this.setState({
           filtered_products: this.props.products
        });
     }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered_products: nextProps.products
        });
    }
    
    // Search by Keyword
  /*handleSearch =(event) => {
    this.setState({ product: event.target.value });
  }*/
   
    
    handle_search = (event) => {
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
        const lc = product.name.toString().toLowerCase();
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
                
    

   render() {
       const {products: products} = this.props;
       console.log("products", products );
       return (
           <div>
         <input
          className="form-control"
          placeholder = "Search...."
         onChange = {this.handle_search} />
         
            <h3>Products</h3>
            <ul className="product-list">
              {this.state.filtered_products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul></div>
       );
    }
}



/*ProductList.propTypes = {
    products: PropTypes.array,
}*/

export default ProductList;


