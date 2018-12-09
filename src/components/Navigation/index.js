import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
//import  App  from '../OnlineShopClientUI1/src/App';


/*const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);
*/


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
  );

const NavigationAuth = () => (
  <div>
     
    
   
      <Link to={ROUTES.HOME}><button type="button">Home</button></Link>
    
      <Link to={ROUTES.ACCOUNT}><button type="button">Account</button></Link>
    
     
    
      <SignOutButton />
   
    </div>
    
    
    
);

const NavigationNonAuth = () => (
<div>
  
      <h3 align = "center"> Welcome to Online Grocery Store!!! </h3>
      <h4 align = "center"> Please Login to buy grocery <Link to={ROUTES.SIGN_IN}><button type="button">Log In</button></Link></h4>
    
      
      </div>
    
);
export default Navigation;