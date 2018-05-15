// ./client/src/index.js
// This file is where React Router and Redux are set up,
// and the app is rendered onto the dom

// React
import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider } from 'material-ui';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';

// Main app component
import App from "./components/App.jsx";

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));