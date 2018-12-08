import React from 'react';
import Cart from '../../containers/Cart';
import ProductList from '../../containers/ProductList';




import { withAuthorization } from '../Session';

const HomePage = () => (
    <div>
        

         </div>
  


            
            

            
        
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);