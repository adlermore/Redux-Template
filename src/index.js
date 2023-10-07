import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));


const mainReducer = (state , acton )=>{
  console.log(state, acton);
}

const store = createStore(mainReducer);

root.render(

<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

);
