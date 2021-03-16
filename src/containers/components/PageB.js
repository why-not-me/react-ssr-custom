import React from 'react';
import Header from './Header';

const PageB = () => {
  console.log('PageB--运行');
  return (
    <div className="page-b">
      <Header></Header>
      <h1>这是PageB</h1>
    </div>
  )
};

export default PageB;