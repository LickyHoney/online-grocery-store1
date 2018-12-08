import { connect } from 'react-redux';
import ProductList from '../ProductList';
import { getProducts } from './products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

export default connect(mapStateToProps)(ProductList);
