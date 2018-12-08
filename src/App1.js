import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Navigation from './components/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';
import SearchBar from './SearchBar';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';




  
const App1 = () => (

  
   
    
     <div className="container">
     <div className="row">
     <Router>
      <div>
      <Navigation />
      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
      
      </Router>
      </div>
            <div className="row">
                <div className="col-md-12">
                    <h1 align="center">Online Grocery Store</h1>
                </div>
                 
            </div>
            <br/><br/>
            <div className="row">
            
            
             
                <SearchBar />

                
           
</div>
            
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            
        </div>
    
);



export default withAuthentication(App1);

/*import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../../Navigation';
import LandingPage from '../../Landing';
import SignUpPage from '../../SignUp';
import SignInPage from '../../SignIn';
import PasswordForgetPage from '../../PasswordForget';
import HomePage from '../../Home';
import AccountPage from '../../Account';
import AdminPage from '../../Admin';


import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
  
     
);


export default withAuthentication(App);*/




