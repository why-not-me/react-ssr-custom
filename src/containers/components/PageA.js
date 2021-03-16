import React from 'react';
import Header from './Header';

const PageA = () => {
  console.log('PageA运行--');
  return (
    <div className="page-a">
      <Header></Header>
      <h1>这是PageA</h1>
    </div>
  )
};

export default PageA;