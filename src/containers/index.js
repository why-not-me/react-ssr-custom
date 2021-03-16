import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import PageA from './components/PageA';
import PageB from './components/PageB';


const Router =  (
  <div>
    <Route path='/' component={Home}></Route>
    <Route path='/a' component={PageA}></Route>
    <Route path='/b' component={PageB}></Route>
  </div>
);

const App = () => {
  return (
    <BrowserRout>
      {Router}
    </BrowserRout>
  )
};

export default App;