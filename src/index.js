//

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';



ReactDOM.render(<FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  
  document.getElementById('root'),
  );


serviceWorker.register();*/
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import App1 from './App1';
import App from './components/App';
import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.css';
import Firebase, { FirebaseContext } from './components/Firebase';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

ReactDOM.render(

   <Provider store={store}>
   <FirebaseContext.Provider value={new Firebase()}>
        <App1 />
        </FirebaseContext.Provider>
    </Provider>,
    document.getElementById('root')
);

//serviceWorker.unregister();

