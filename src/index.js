import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, connect } from 'react-redux';
import store from './store/index';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_HOST
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const Root = connect()(App) 

ReactDOM.render(
  <Provider store={store}>
      <Root />
  </Provider>,
  document.getElementById('root')
);