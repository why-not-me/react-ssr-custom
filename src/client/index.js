import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from '../containers/routers/index';

/** 客户端注水 */

const getServerinitialState = () => {
  console.log('客户端代码--');
  return JSON.parse(window.context.initialState)
}

const App = (props) => {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  )
}

ReactDOM.hydrate(<App data={getServerinitialState()} />, document.getElementById('root'));