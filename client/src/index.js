import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    {/* <StyledEngineProvider injectFirst> */}
    <App />
    {/* </StyledEngineProvider>, */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
